import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch';
import { redirect } from 'react-router-dom';

export const action =
  (queryClient) =>
  async ({ params }) => {
    try {
      await customFetch.delete(`/posts/${params.id}`);
      queryClient.invalidateQueries(['posts']);

      toast.success('Bài viết đã được xoá thành công');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
    return redirect('/admin/posts');
  };
