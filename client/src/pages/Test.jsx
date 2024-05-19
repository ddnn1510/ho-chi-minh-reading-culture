import Wrapper from '../assets/wrappers/Test';
import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaCheck } from 'react-icons/fa6';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { Link, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import CustomModal from '../components/CustomModal';
import Cookies from 'js-cookie';

const testQuery = {
  queryKey: ['test'],
  queryFn: async () => {
    const { data } = await customFetch.get('/questions');
    return data;
  },
};

const currentUserQuery = {
  queryKey: ['current-user'],
  queryFn: async () => {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  },
};

export const loader = (queryClient) => async () => {
  try {
    await queryClient.prefetchQuery(currentUserQuery);

    // Retrieve the current user data
    const data = queryClient.getQueryData(['current-user']);

    if (!data || !data.user) {
      return redirect('/login');
    }

    return await queryClient.ensureQueryData(testQuery);
  } catch (error) {
    return redirect('/');
  }
};

const Test = () => {
  const test = useLoaderData();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questions, setQuestions] = useState(
    test?.questions.map((item, index) => ({ ...item, index }))
  );
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(
    questions.map((item) => ({ question_id: item._id, answer: null }))
  );
  const [timeLeft, setTimeLeft] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (state) => {
    setIsModalOpen(state);
  };

  const verifyTestCookie = () => {
    const testCookie = Cookies.get('test');
    if (!testCookie) {
      return navigate('/contest');
    }

    const test = JSON.parse(testCookie);
    if (!test.start) {
      return navigate('/contest');
    }

    const currentTime = Date.now();
    const startTime = Date.parse(test.startTime);
    if (currentTime - startTime > 30 * 60 * 1000) {
      return navigate('/contest');
    }
  };

  useEffect(() => {
    verifyTestCookie();

    const startTime = Date.parse(test?.startTime) / 1000;

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
    let status = '';

    if (currentQuestion.index === index) {
      status += ' current';
    }
    if (isSubmitted) {
      if (questions[index]?.isCorrect) {
        status += ' correct';
      } else {
        status += ' wrong';
      }
    } else if (answers[index]?.answer !== null) {
      status += ' answered';
    }
    return status;
  };

  const getAnswerStatus = (questionIndex, userAnswerIndex) => {
    let status = '';
    if (isSubmitted) {
      status += 'disabled';
      if (userAnswerIndex === questions[questionIndex]?.correct) {
        status += ' correct';
      } else if (userAnswerIndex === questions[questionIndex]?.userAnswer) {
        status += ' wrong';
      }
    }
    return status;
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

  const handleSubmit = async () => {
    try {
      const body = { testId: test?.testId, answers };
      const result = await customFetch.post('/tests/submit', body);
      toast.success('Bạn đã nộp bài thành công');
      setIsSubmitted(true);
      Cookies.remove('test');
      if (result?.data) {
        setScore(result?.data?.score || 0);
        setQuestions(
          result?.data?.questions.map((item, index) => ({ ...item, index })) ||
            []
        );
      }
      toggleModal(true);
    } catch (error) {
      toast.error(error?.response?.data?.msg);

      return error;
    }
  };

  return (
    <Wrapper>
      <div className="test-view flex">
        <div className="test-view__left">
          <div className="list-heading flex items-center justify-center">
            <div className="list-title not-mobile font-bold">
              Danh sách câu hỏi
            </div>
            {!isSubmitted ? (
              <div
                className={`countdown-test ${
                  timeLeft <= 5 * 60 ? 'red' : 'yellow'
                }`}
              >
                {Math.floor(timeLeft / 60)}:
                {('0' + Math.floor(timeLeft % 60)).slice(-2)}
              </div>
            ) : (
              <div className="list-score">
                <span className="score">{score}</span>
                <span>/</span>
                <span>30</span>
              </div>
            )}
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
            <div className="title-note font-semibold">Chọn đáp án đúng:</div>
            <div className="answer-group flex flex-col">
              {currentQuestion.answers.map((answer, index) => (
                <label
                  className={`answer-item ${getAnswerStatus(
                    currentQuestion.index,
                    index
                  )}`}
                  key={index}
                >
                  <input
                    type="radio"
                    value={index}
                    checked={answers[currentQuestion.index]?.answer === index}
                    onChange={() => handleAnswer(currentQuestion._id, index)}
                    disabled={isSubmitted}
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
            {!isSubmitted ? (
              <button
                className="btn btn-submit btn-white"
                onClick={handleSubmit}
              >
                <FaCheck />
                Nộp bài
              </button>
            ) : (
              <Link to="/contest">
                <button className="btn btn-white">Về trang thi</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* <button onClick={() => toggleModal(true)}>open</button> */}
      <CustomModal isOpen={isModalOpen} onClose={() => toggleModal(false)}>
        <div className="container">
          <div>Chúc mừng bạn đã hoàn thành bài thi với số điểm</div>
          <div className="score">
            <span>{score}</span>/30
          </div>
          <hr />
          <button className="btn" onClick={() => toggleModal(false)}>
            Xem đáp án chi tiết
          </button>
        </div>
      </CustomModal>
    </Wrapper>
  );
};
export default Test;
