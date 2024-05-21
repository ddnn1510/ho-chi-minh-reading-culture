import { useEffect } from 'react';
import { useHomeLayoutContext } from './HomeLayout';
import Wrapper from '../assets/wrappers/Contest';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const rankingData = [
  {
    number: 1,
    name: 'Phung Dinh Duong',
    score: 30,
    time: '30:00',
  },
  {
    number: 2,
    name: 'Jane Doe',
    score: 29,
    time: '25:00',
  },
  {
    number: 3,
    name: 'Jane Doe',
    score: 29,
    time: '27:30',
  },
  {
    number: 4,
    name: 'Jane Doe',
    score: 29,
    time: '29:20',
  },
  {
    number: 5,
    name: 'Jane Doe',
    score: 28,
    time: '20:00',
  },
];

const Contest = () => {
  const navigate = useNavigate();
  const { setCategoryName } = useHomeLayoutContext();

  useEffect(() => {
    setCategoryName(
      'Cuộc thi trực tuyến tìm hiểu về cuộc đời, thân thế, sự nghiệp của Chủ tịch Hồ Chí Minh'
    );
  }, []);

  const handleStartContest = () => {
    const test = {
      start: true,
      startTime: new Date(),
    };

    Cookies.set('test', JSON.stringify(test));

    return navigate('/test');
  };

  return (
    <Wrapper>
      <div className="intro-section">
        <div className="contest-time">
          <div className="label">Thời gian thi</div>
          <div className="time-container">
            <span className="time">30</span>
            <span className="unit">phút</span>
          </div>
        </div>
        <button className="btn" onClick={handleStartContest}>
          Vào thi
        </button>
      </div>
      <div className="ranking-table-container">
        <table className="ranking-table">
          <tr>
            <th>#</th>
            <th>Người thi</th>
            <th>Điểm</th>
            <th>Thời gian</th>
          </tr>
          {rankingData.map((data, index) => (
            <tr className="ranking-row" key={index}>
              <td className="number">{data.number}</td>
              <td className="name">{data.name}</td>
              <td className="score">{data.score}</td>
              <td className="time">{data.time}</td>
            </tr>
          ))}
        </table>
      </div>
    </Wrapper>
  );
};
export default Contest;
