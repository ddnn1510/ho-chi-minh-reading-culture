import Wrapper from '../assets/wrappers/Header';
import bannerImg from '../assets/images/banner.png';
import TopNav from './TopNav';

const Header = () => {
  return (
    <Wrapper>
      <TopNav />
      <div className="banner-container">
        <div className="banner">
          <img src={bannerImg} alt="banner" className="banner-img" />
        </div>
      </div>
      <div className="title">Giới thiệu</div>
    </Wrapper>
  );
};
export default Header;
