import { useParams } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Post';
import { Sidebar } from '../components';

const Post = () => {
  const { postId } = useParams();

  return (
    <Wrapper>
      <article>Post {postId}</article>
      <Sidebar></Sidebar>
    </Wrapper>
  );
};
export default Post;
