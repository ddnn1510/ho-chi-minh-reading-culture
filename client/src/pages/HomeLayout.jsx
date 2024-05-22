/* eslint-disable react-refresh/only-export-components */
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { Footer, GoTop, TopNav, HeroBanner } from '../components';
import Wrapper from '../assets/wrappers/HomeLayout';
import { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/customFetch';
import Loading from '../components/Loading';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const fetchCategories = async () => {
  const { data } = await customFetch.get('/categories/intro');
  return data;
};

export const CategoriesContext = createContext();

export const useCategories = () => {
  return useContext(CategoriesContext);
};
const HomeLayout = () => {
  const { categoriesList, currentUserData } = useLoaderData();
  const location = useLocation();
  const [categoryName, setCategoryName] = useState(null);
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isPageLoading = navigation.state === 'loading';
  const queryClient = useQueryClient();

  const isTestPage = location.pathname === '/test';

  const logout = async () => {
    await customFetch.get('/auth/logout');
    await queryClient.setQueryData(['current-user'], null);
    toast.success('Đăng xuất thành công!');
    navigate('/');
    //reload window
    window.location.reload();
  };

  return (
    <HomeLayoutContext.Provider
      value={{ categoriesList, currentUserData, setCategoryName, logout }}
    >
      <Wrapper>
        <TopNav key={currentUserData?.id} />
        {!isTestPage && (
          <>
            <HeroBanner />
            <div className="category-name">
              {categoryName ||
                'Chào mừng các bạn đến với "Không gian văn hoá đọc Hồ Chí Minh"'}
            </div>
          </>
        )}
        <main>{isPageLoading ? <Loading /> : <Outlet />}</main>
        <Footer />
      </Wrapper>
    </CategoriesContext.Provider>
  );
};
export default HomeLayout;
