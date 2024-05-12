import { useParams } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Post';
import { Sidebar } from '../components';

const Category = () => {
  const { categoryId } = useParams();

  return (
    <Wrapper>
      <article>Category {categoryId}</article>
      <Sidebar></Sidebar>
    </Wrapper>
  );
};
export default Category;
