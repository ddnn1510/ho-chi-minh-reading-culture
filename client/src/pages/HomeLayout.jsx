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
import customFetch from '../utils/customFetch';
import Loading from '../components/Loading';
import { useQueryClient } from '@tanstack/react-query';

const categoriesQuery = {
  queryKey: ['categories'],
  queryFn: async () => {
    const { data } = await customFetch.get('/categories/intro');
    return data;
  },
};

const currentUserQuery = {
  queryKey: ['current-user'],
  queryFn: async () => {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  },
};

export const loader = (queryClient) => async () => {
  let categoriesList = null;
  let currentUserData = null;

  try {
    categoriesList = await queryClient.ensureQueryData(categoriesQuery);
    currentUserData = await queryClient.ensureQueryData(currentUserQuery);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      queryClient.setQueryData('current-user', null);
    }
  }
  return { categoriesList, currentUserData };
};

export const HomeLayoutContext = createContext();

export const useHomeLayoutContext = () => {
  return useContext(HomeLayoutContext);
};
const HomeLayout = () => {
  const { categoriesList, currentUserData } = useLoaderData();
  const location = useLocation();
  const [categoryName, setCategoryName] = useState('');
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isPageLoading = navigation.state === 'loading';
  const queryClient = useQueryClient();

  const isTestPage = location.pathname === '/test';

  const logout = async () => {
    await customFetch.get('/auth/logout');
    await queryClient.setQueryData(['current-user'], null);

    navigate('/');
  };

  return (
    <HomeLayoutContext.Provider
      value={{ categoriesList, currentUserData, setCategoryName, logout }}
    >
      <Wrapper>
        <TopNav />
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
        <GoTop />
      </Wrapper>
    </HomeLayoutContext.Provider>
  );
};
export default HomeLayout;
