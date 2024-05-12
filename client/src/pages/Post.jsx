import { useParams } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Post';
import { PostSidebar } from '../components';

const Post = () => {
  const { postId } = useParams();

  return (
    <Wrapper>
      <article>Post {postId}</article>
      <PostSidebar></PostSidebar>
    </Wrapper>
  );
};
export default Post;
