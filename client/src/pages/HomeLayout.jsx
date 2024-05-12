/* eslint-disable react-refresh/only-export-components */
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';
import Wrapper from '../assets/wrappers/HomeLayout';
import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/customFetch';

const fetchCategories = async () => {
  const { data } = await customFetch.get('/categories/intro');
  return data;
};

export const CategoriesContext = createContext();

export const useCategories = () => {
  return useContext(CategoriesContext);
};
const HomeLayout = () => {
  const categoriesQuery = useQuery({
    queryKey: 'categories',
    queryFn: fetchCategories,
  });

  return (
    <Wrapper>
      <Header />
      <main>
        <CategoriesContext.Provider value={categoriesQuery}>
          <Outlet />
        </CategoriesContext.Provider>
      </main>
      <Footer />
    </Wrapper>
  );
};
export default HomeLayout;
