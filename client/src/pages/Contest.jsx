import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Contest = () => {
  const { setCategoryName } = useOutletContext();

  useEffect(() => {
    setCategoryName(
      'Cuộc thi trực tuyến tìm hiểu về cuộc đời, thân thế, sự nghiệp của Chủ tịch Hồ Chí Minh'
    );
  }, []);

  return (
    <div>
      Cuộc thi trực tuyến tìm hiểu về cuộc đời, thân thế, sự nghiệp của Chủ tịch
      Hồ Chí Minh
    </div>
  );
};
export default Contest;
