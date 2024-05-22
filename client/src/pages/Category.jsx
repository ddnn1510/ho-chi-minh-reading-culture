import { redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Post';
import { Sidebar } from '../components';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/customFetch';
import { useEffect } from 'react';
import { useHomeLayoutContext } from './HomeLayout';
import { toast } from 'react-toastify';

const Category = () => {
  const { categoryId } = useParams();

  const {
    data: category,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['category', categoryId],
    queryFn: () => fetchCategoryById(categoryId),
  });

  const { setCategoryName } = useOutletContext();

  useEffect(() => {
    setCategoryName(category?.name || '');
  }, [category]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading category</div>;
  }

  return (
    <Wrapper>
      <article>
        {category && category?.content?.trim() ? (
          <div
            dangerouslySetInnerHTML={{ __html: category.content }}
            className="ql-editor"
          />
        ) : (
          category?.name
        )}
      </article>
      <Sidebar></Sidebar>
    </Wrapper>
  );
};
export default Category;
