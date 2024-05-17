import Test from '../models/TestModel.js';

// get all test
export const getTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.status(200).json(tests);
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ msg: 'An error occurred while getting tests', error });
  }
};

//handle submit test
export const submitTest = async (req, res) => {
  try {
    const { testId, answers } = req.body;
    const test = await Test.findById(testId);
    if (!test) {
      return res.status(404).json({ msg: 'Test not found' });
    }
    let score = 0;
    test.questions.forEach((question, index) => {
      const userAnswer = answers.find(
        (answer) => answer.question_id.toString() === question._id.toString()
      );
      if (userAnswer && question.correct === userAnswer.answer) {
        question.isCorrect = true;
        score += 1;
      } else {
        question.isCorrect = false;
      }
      question.userAnswer = userAnswer ? userAnswer.answer : null;
    });
    test.score = score;
    test.isSubmitted = true;

    await test.save();

    // return test without correct answer
    let testWithoutCorrect = JSON.parse(JSON.stringify(test));
    testWithoutCorrect.questions.forEach((question) => {
      delete question.correct;
    });

    res.status(200).json(testWithoutCorrect);
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ msg: 'An error occurred while submitting test', error });
  }
};
