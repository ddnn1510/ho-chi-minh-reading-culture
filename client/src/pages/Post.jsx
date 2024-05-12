import { useParams } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Post';
import { Sidebar } from '../components';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/customFetch';

const fetchPostById = async (id) => {
  const { data } = await customFetch.get(`/posts/${id}`);
  return data;
};

const Post = () => {
  const { postId } = useParams();

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetchPostById(postId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading category</div>;
  }

  return (
    <Wrapper>
      <article>Post {postId}</article>
      <Sidebar></Sidebar>
    </Wrapper>
  );
};
export default Post;
