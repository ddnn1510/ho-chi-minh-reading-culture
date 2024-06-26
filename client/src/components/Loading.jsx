import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loading = () => {
  return (
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 500,
            color: 'var(--grey-400)',
          }}
          spin
        />
      }
    />
  );
};

export default Loading;
