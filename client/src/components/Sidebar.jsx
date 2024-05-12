import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Sidebar';

const newestPosts = [
  {
    title: 'Hành trình 30 năm tìm đường cứu nước của Bác',
    path: '/',
  },
  {
    title: 'Hành trình 30 năm tìm đường cứu nước của Bác',
    path: '/',
  },
  {
    title: 'Hành trình 30 năm tìm đường cứu nước của Bác',
    path: '/',
  },
  {
    title: 'Hành trình 30 năm tìm đường cứu nước của Bác',
    path: '/',
  },
  {
    title: 'Hành trình 30 năm tìm đường cứu nước của Bác',
    path: '/',
  },
];

const relatedPosts = [
  {
    title: 'Hành trình 30 năm tìm đường cứu nước của Bác',
    path: '/',
  },
  {
    title: 'Hành trình 30 năm tìm đường cứu nước của Bác',
    path: '/',
  },
  {
    title: 'Hành trình 30 năm tìm đường cứu nước của Bác',
    path: '/',
  },
  {
    title: 'Hành trình 30 năm tìm đường cứu nước của Bác',
    path: '/',
  },
  {
    title: 'Hành trình 30 năm tìm đường cứu nước của Bác',
    path: '/',
  },
];

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="widget">
        <div className="widget-title">Bài viết cùng mục</div>
        <div className="widget-list">
          {relatedPosts.map((item, index) => (
            <div className="post-item" key={index}>
              <div className="post-no">{index + 1}.</div>
              <Link to={item.path} className="post-title">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <Link to="/" className="view-more">
          Xem tất cả
        </Link>
      </div>
      <div className="widget">
        <div className="widget-title">Bài viết mới nhất</div>
        <div className="widget-list">
          {newestPosts.map((item, index) => (
            <div className="post-item" key={index}>
              <div className="post-no">{index + 1}.</div>
              <Link to={item.path} className="post-title">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <Link to="/" className="view-more">
          Xem tất cả
        </Link>
      </div>
      <div className="widget">
        <div className="widget-title">Quét QR bài viết</div>
        <img
          className="qr-code"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
          alt="category qr"
        />
      </div>
    </Wrapper>
  );
};
export default Sidebar;
