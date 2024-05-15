import Wrapper from '../assets/wrappers/Header';
import bannerImg from '../assets/images/banner.png';
import TopNav from './TopNav';
import { useHomeLayoutContext } from '../pages/HomeLayout';

const Header = () => {
  const { categoriesList } = useHomeLayoutContext();

  return (
    <Wrapper>
      <TopNav categoryList={categoriesList} />
      <div className="banner-container">
        <div className="banner">
          <img src={bannerImg} alt="banner" className="banner-img" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Header;
