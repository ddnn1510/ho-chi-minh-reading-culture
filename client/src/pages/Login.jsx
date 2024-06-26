import { Form, Link, json, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components';
import portraictImg from '../assets/images/portrait-bac-ho.png';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const fetchCurrentUser = async () => {
  const { data } = await customFetch.get('/users/current-user');
  return data;
};

export const loader = async () => {
  try {
    const data = await fetchCurrentUser();
    if (data.user !== null) {
      return redirect('/');
    }
    return json({});
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/');
  }
};

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post('/auth/login', data);
      const currentUser = await customFetch.get('/users/current-user');

      await queryClient.setQueryData(['current-user'], currentUser.data);

      toast.success('Đăng nhập thành công!');
      const previousPage = queryClient.getQueryData('previous-page');
      if (previousPage) {
        queryClient.setQueryData('previous-page', null);
        return redirect(previousPage);
      }
      return redirect('/');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const Login = () => {
  return (
    <Wrapper>
      <div className="form-container">
        <Form method="post" className="form">
          <h4>Đăng nhập</h4>
          <p>
            Chưa có tài khoản?
            <Link to="/register" className="member-btn">
              Đăng ký
            </Link>
          </p>
          <FormRow type="email" name="email" labelText="Email" />
          <FormRow type="password" name="password" labelText="Mật khẩu" />
          <button type="submit" className="btn btn-block">
            Đăng nhập
          </button>
        </Form>
      </div>
      <div className="img-container">
        <img src={portraictImg} alt="Anh Bac Ho" />
      </div>
    </Wrapper>
  );
};
export default Login;
