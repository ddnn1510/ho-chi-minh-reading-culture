import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components';
import portraictImg from '../assets/images/portrait-bac-ho.png';

const Login = () => {
  return (
    <Wrapper>
      <div className="form-container">
        <form className="form">
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
        </form>
      </div>
      <div className="img-container">
        <img src={portraictImg} alt="Anh Bac Ho" />
      </div>
    </Wrapper>
  );
};
export default Login;
