/* eslint-disable react-refresh/only-export-components */
import { Outlet, redirect } from 'react-router-dom';
import { Header, Footer, GoTop } from '../components';
import Wrapper from '../assets/wrappers/HomeLayout';
import { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const fetchCategories = async () => {
  const { data } = await customFetch.get('/categories/intro');
  return data;
};

const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  },
};

export const loader = (queryClient) => async () => {
  try {
    console.log('loader');
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    console.log('error', error);
    toast.error('Please login to continue');
    return null;
    // return redirect('/login');
  }
};

export const HomeLayoutContext = createContext();

export const useHomeLayoutContext = () => {
  return useContext(HomeLayoutContext);
};
const HomeLayout = () => {
  const categoriesQuery = useQuery({
    queryKey: 'categories',
    queryFn: fetchCategories,
  });

  const user = useQuery(userQuery)?.data?.user;

  const [categoryName, setCategoryName] = useState();

  return (
    <HomeLayoutContext.Provider value={categoriesQuery}>
      <Wrapper>
        <Header />
        <div className="category-name">{categoryName || ''}</div>
        <main>
          <Outlet context={{ setCategoryName, user }} />
        </main>
        <Footer />
        <GoTop />
      </Wrapper>
    </HomeLayoutContext.Provider>
  );
};
export default HomeLayout;
