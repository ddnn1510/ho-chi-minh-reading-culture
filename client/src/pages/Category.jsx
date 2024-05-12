import { useParams } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Post';
import { Sidebar } from '../components';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/customFetch';

const fetchCategoryById = async (id) => {
  const { data } = await customFetch.get(`/categories/${id}`);
  return data;
};

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading category</div>;
  }

  console.log(category);

  return (
    <Wrapper>
      <article>{category ? category.name : 'Default category'}</article>
      <Sidebar></Sidebar>
    </Wrapper>
  );
};
export default Category;
