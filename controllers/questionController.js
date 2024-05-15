import Question from '../models/QuestionModel.js';
import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  keyFile: './utils/credentials.json',
  scopes: ['https://www.googleapis.com/auth/documents'],
});

export const importQuestions = async (req, res) => {
  try {
    const data = await readGoogleDocs(
      '12OdorWeyvDS1W1f7jomaKMng9OnkZl-QeLfwlYrrEaA'
    );

    let questionsData = extractTextRuns(data.body.content);
    questionsData = questionsData.filter(
      (object) => object.content.trim() !== ''
    );
    questionsData = questionsData.map((run) => {
      // let content = run.content.replace(/^\s*[A-D]\.\s*|\d+\.\s*/, '');
      let content = run.content.replace(/^\s*[A-D][.)]\s*|\d+[.)]\s*/, '');
      let type = /^\s*\d+\./.test(run.content) ? 'question' : 'answer';
      return { type, content, isAnswer: run.isAnswer };
    });

    let questions = [];
    let currentQuestion = null;
    questionsData.forEach((item) => {
      if (item.type === 'question') {
        currentQuestion = {
          question: item.content,
          answers: [],
          correct: null,
        };
        questions.push(currentQuestion);
      } else if (item.type === 'answer' && item.content.trim() !== '') {
        currentQuestion.answers.push(item.content);
        if (item.isAnswer) {
          currentQuestion.correct = currentQuestion.answers.length - 1;
        }
      }
    });

    await Question.insertMany(questions);

    res.status(200).json(questions);
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ msg: 'An error occurred while importing questions', error });
  }
};

function extractTextRuns(obj) {
  let textRuns = [];

  for (let key in obj) {
    if (key === 'textRun') {
      let content = obj[key].content;
      let isAnswer = obj[key].textStyle.bold;
      textRuns.push({ content, isAnswer });
    } else if (typeof obj[key] === 'object') {
      textRuns = textRuns.concat(extractTextRuns(obj[key]));
    }
  }

  return textRuns;
}

async function readGoogleDocs(documentId) {
  try {
    const docs = google.docs({ version: 'v1', auth }); // Create a Google Docs API client

    // Retrieve the document content
    const response = await docs.documents.get({ documentId }); // ID of the document to read
    return response.data; // Return the document data
  } catch (error) {
    console.error('error', error); // Log any errors that occur
  }
}

export const getListQuestions = async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 30 } }]);
    questions.forEach((question) => {
      question.answers.sort(() => Math.random() - 0.5);
    });
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve questions' });
  }
};
