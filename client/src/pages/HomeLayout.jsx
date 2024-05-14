/* eslint-disable react-refresh/only-export-components */
import { Outlet } from 'react-router-dom';
import { Header, Footer, GoTop } from '../components';
import Wrapper from '../assets/wrappers/HomeLayout';
import { createContext, useContext, useState } from 'react';
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

  const [categoryName, setCategoryName] = useState();

  return (
    <CategoriesContext.Provider value={categoriesQuery}>
      <Wrapper>
        <Header />
        <div className="category-name">{categoryName || ''}</div>
        <main>
          <Outlet context={{ setCategoryName }} />
        </main>
        <Footer />
        <GoTop />
      </Wrapper>
    </CategoriesContext.Provider>
  );
};
export default HomeLayout;
