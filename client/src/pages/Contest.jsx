import { useEffect } from 'react';
import { useHomeLayoutContext } from './HomeLayout';

const Contest = () => {
  const { setCategoryName } = useHomeLayoutContext();

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
