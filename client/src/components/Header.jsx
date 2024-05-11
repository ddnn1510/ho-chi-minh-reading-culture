import Wrapper from '../assets/wrappers/Header';
import bannerImg from '../assets/images/banner.png';
const Header = () => {
  return (
    <Wrapper>
      <nav className="navbar"></nav>
      <div className="banner">
        <div className="banner-container">
          <img src={bannerImg} alt="banner" className="banner-img" />
        </div>
      </div>
      <div className="title">Giới thiệu</div>
    </Wrapper>
  );
};
export default Header;
