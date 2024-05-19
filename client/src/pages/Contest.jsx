import { useEffect } from 'react';
import { useHomeLayoutContext } from './HomeLayout';
import Wrapper from '../assets/wrappers/Contest';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

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
    </Wrapper>
  );
};
export default Contest;
