import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';
import Wrapper from '../assets/wrappers/HomeLayout';

const HomeLayout = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Wrapper>
  );
};
export default HomeLayout;
