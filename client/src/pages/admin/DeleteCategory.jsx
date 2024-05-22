import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch';
import { redirect } from 'react-router-dom';

export const action =
  (queryClient) =>
  async ({ params }) => {
    try {
      await customFetch.delete(`/categories/${params.id}`);
      queryClient.invalidateQueries(['categories']);

      toast.success('Danh mục đã được xoá thành công');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
    return redirect('/admin/categories');
  };
