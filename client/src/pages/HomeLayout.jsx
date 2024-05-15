/* eslint-disable react-refresh/only-export-components */
import { Outlet, useLoaderData } from 'react-router-dom';
import { Header, Footer, GoTop } from '../components';
import Wrapper from '../assets/wrappers/HomeLayout';
import { createContext, useContext, useState } from 'react';
import customFetch from '../utils/customFetch';

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

  const [categoryName, setCategoryName] = useState();

  return (
    <HomeLayoutContext.Provider
      value={{ categoriesList, currentUserData, setCategoryName }}
    >
      <Wrapper>
        <Header />
        <div className="category-name">{categoryName || 'Giới thiệu'}</div>
        <main>
          <Outlet />
        </main>
        <Footer />
        <GoTop />
      </Wrapper>
    </HomeLayoutContext.Provider>
  );
};
export default HomeLayout;
