import { useParams } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Post';
import { CategorySidebar } from '../components';

const Category = () => {
  const { categoryId } = useParams();

  return (
    <Wrapper>
      <article>Category {categoryId}</article>
      <CategorySidebar></CategorySidebar>
    </Wrapper>
  );
};
export default Category;
