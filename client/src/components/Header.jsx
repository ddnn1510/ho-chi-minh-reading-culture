import Wrapper from '../assets/wrappers/Header';
import bannerImg from '../assets/images/banner.png';
import TopNav from './TopNav';
import { useCategories } from '../pages/HomeLayout';

const Header = () => {
  const { data: categoryList, isLoading, isError } = useCategories();
  if (isLoading) {
    // return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading categories</div>;
  }
  return (
    <Wrapper>
      <TopNav categoryList={categoryList || []} />
      <div className="banner-container">
        <div className="banner">
          <img src={bannerImg} alt="banner" className="banner-img" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Header;
