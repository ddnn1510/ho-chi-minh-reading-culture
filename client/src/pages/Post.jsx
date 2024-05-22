import { useOutletContext, useParams } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Post';
import { Sidebar } from '../components';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/customFetch';
import { useEffect } from 'react';

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

  const { setCategoryName } = useOutletContext();

  useEffect(() => {
    setCategoryName(post?.category?.name || '');
  }, [post]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading category</div>;
  }

  return (
    <Wrapper>
      <article>
        {post && post?.content ? (
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="ql-editor"
          />
        ) : (
          post?.title
        )}
      </article>
      <Sidebar categoryId={post?.category?._id} />
    </Wrapper>
  );
};
export default Post;
