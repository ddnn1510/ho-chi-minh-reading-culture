import Wrapper from '../assets/wrappers/Test';
import questionsList from '../../../utils/mockData.json';
import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaCheck } from 'react-icons/fa6';

const Test = () => {
  const questions = questionsList.map((item, index) => ({ ...item, index }));
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [answers, setAnswers] = useState(
    questions.map((item) => ({ question_id: item._id, answer: null }))
  );
  const [timeLeft, setTimeLeft] = useState();

  const getCurrentTimestamp = () => {
    return Date.now();
  };

  useEffect(() => {
    const startTime = getCurrentTimestamp() / 1000;

    setTimeLeft(startTime + 30 * 60 - Date.now() / 1000);

    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          clearInterval(timer);
          handleSubmit();
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getQuestionStatus = (index) => {
    if (answers[index]?.answer !== null) {
      return 'answered';
    } else if (currentQuestion.index === index) {
      return 'current';
    } else {
      return '';
    }
  };

  const handleNext = () => {
    setCurrentQuestion(questions[(currentQuestion.index + 1) % 30]);
  };

  const handlePrev = () => {
    setCurrentQuestion(questions[(currentQuestion.index - 1 + 30) % 30]);
  };

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers((prevAnswers) =>
      prevAnswers.map((item) =>
        item.question_id === questionId
          ? { ...item, answer: answerIndex }
          : item
      )
    );
  };

  const handleSubmit = () => {
    // console.log('submit', answers);
  };

  return (
    <Wrapper>
      <div className="test-view flex">
        <div className="test-view__left">
          <div className="list-heading flex items-center justify-center">
            <div className="list-title not-mobile font-bold">
              Danh sách câu hỏi
            </div>
            {/* <div className="list-title mobile font-bold">Thời gian còn lại</div> */}
            <div
              className={`countdown-test ${
                timeLeft <= 5 * 60 ? 'red' : 'yellow'
              }`}
            >
              {Math.floor(timeLeft / 60)}:
              {('0' + Math.floor(timeLeft % 60)).slice(-2)}
            </div>
          </div>
          <hr />
          <div className="question-list flex flex-wrap justify-center">
            {questions.map((_, index) => (
              <div className="list-item" key={index}>
                <div
                  className={`question-item flex items-center justify-center ${getQuestionStatus(
                    index
                  )}`}
                  onClick={() => setCurrentQuestion(questions[index])}
                >
                  <span className="question-text font-bold">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="test-view__right">
          <div className="question-heading font-bold">
            Câu hỏi {currentQuestion.index + 1}
          </div>
          <div className="question-content">{currentQuestion.question}</div>
          {currentQuestion.questionImage && (
            <div className="question-image">
              <img src={currentQuestion.questionImage} alt="question" />
            </div>
          )}
          <hr />
          <div className="question-answers flex flex-col">
            <div className="title-note font-semibold">
              Chọn đáp án đúng nhất cho câu hỏi
            </div>
            <div className="answer-group flex flex-col">
              {currentQuestion.answers.map((answer, index) => (
                <label className="answer-item" key={index}>
                  <input
                    type="radio"
                    value={index}
                    checked={answers[currentQuestion.index]?.answer === index}
                    onChange={() => handleAnswer(currentQuestion._id, index)}
                  />
                  <span className="answer-text">{answer}</span>
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
          </div>
          <hr />
          <div className="action-container flex items-center justify-between">
            <div className="flex justify-between">
              <button className="btn btn-prev btn-gray" onClick={handlePrev}>
                <FaAngleLeft />
                Câu trước
              </button>
              <button className="btn btn-next" onClick={handleNext}>
                Câu sau
                <FaAngleRight />
              </button>
            </div>
            <button className="btn btn-submit btn-white" onClick={handleSubmit}>
              <FaCheck />
              Nộp bài
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Test;
