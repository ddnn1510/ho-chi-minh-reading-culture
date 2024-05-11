import Wrapper from '../assets/wrappers/TopNav';
import { NavLink } from 'react-router-dom';
import { categoryLinks } from '../utils/links';
import logoSchool from '../assets/images/logo-school.svg';
import { FaBars, FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';
import ModalNav from './ModalNav';

const TopNav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <Wrapper>
      <div className="topnav">
        <div className="logo">
          <img
            src={logoSchool}
            alt="Logo truong thpt so 1 phu my"
            className="logo-img"
          />
          <NavLink to="/" className="logo-text">
            Không gian văn hoá đọc{' '}
            <span style={{ whiteSpace: 'nowrap' }}>Hồ Chí Minh</span>
          </NavLink>
        </div>
        <div className="topnav-content desktop">
          <div className="dropdown">
            <button className="dropbtn">
              Danh mục bài viết
              <FaCaretDown />
            </button>
            <div className="dropdown-content">
              {categoryLinks.map((link) => {
                const { text, path } = link;
                return (
                  <NavLink to={path} key={text} className="nav-link" end>
                    {text}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <NavLink to="/contest">Thi trực tuyến</NavLink>
          <NavLink to="/login">Đăng nhập</NavLink>
        </div>
        <div className="topnav-content mobile">
          <button type="button" className="toggle-btn" onClick={toggleNavbar}>
            <FaBars />
          </button>
        </div>
      </div>
      <ModalNav showNavbar={showNavbar} toggleNavbar={toggleNavbar} />
    </Wrapper>
  );
};
export default TopNav;