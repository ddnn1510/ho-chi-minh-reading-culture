// get random 30 questions from the database, randomize the order of the answers and send them to the client
//
import Question from '../models/QuestionModel';
import { google } from 'googleapis';
const docs = google.docs({ version: 'v1', auth });

export const importQuestions = async (req, res) => {
  try {
    // Get the document ID from the request
    const docId = req.body.docId;

    // Fetch the document from Google Docs
    const doc = await docs.documents.get({ documentId: docId });

    // Parse the document content to extract questions
    const questions = parseDocumentContent(doc.data.content);

    // Save the questions to your database
    await saveQuestionsToDatabase(questions);

    res.status(200).json({ msg: 'Questions imported successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'An error occurred while importing questions', error });
  }
};

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
