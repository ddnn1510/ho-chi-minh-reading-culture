import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components';
import portraictImg from '../assets/images/portrait-bac-ho.png';

const Register = () => {
  return (
    <Wrapper>
      <div className="form-container">
        <form className="form">
          <h4>Đăng ký tài khoản</h4>
          <p>
            Đã có tài khoản?
            <Link to="/login" className="member-btn">
              Đăng nhập
            </Link>
          </p>
          <FormRow type="text" name="name" labelText="Họ và tên" />
          <FormRow type="email" name="email" labelText="Email" />
          <FormRow type="password" name="password" labelText="Mật khẩu" />
          <button type="submit" className="btn btn-block">
            Đăng ký
          </button>
        </form>
      </div>
      <div className="img-container">
        <img src={portraictImg} alt="Anh Bac Ho" />
      </div>
    </Wrapper>
  );
};
export default Register;
