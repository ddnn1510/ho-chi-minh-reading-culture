import { useLoaderData } from 'react-router-dom';
import customFetch from '../../utils/customFetch';
import { useQuery } from '@tanstack/react-query';

const allPostsQuery = (params) => {
  return {
    queryFn: async () => {
      const { data } = await customFetch.get('/posts', {
        params,
      });
      console.log(data);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(allPostsQuery(params));
    return { searchValues: { ...params } };
  };

const AllPosts = () => {
  const { searchValues } = useLoaderData();

  const { data } = useQuery(allPostsQuery(searchValues));
  return <div>AllPosts</div>;
};
export default AllPosts;
