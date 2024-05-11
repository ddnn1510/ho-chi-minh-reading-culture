import { FaCaretDown, FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/ModalNav';
import NavLinks from './admin/NavLinks';
import { NavLink } from 'react-router-dom';
import { categoryLinks } from '../utils/links';
import { useState } from 'react';

const ModalNav = ({ showNavbar, toggleNavbar }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleClose = () => {
    toggleNavbar();
    setShowDropdown(false);
  };

  return (
    <Wrapper>
      <div
        className={
          showNavbar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleClose}>
            <FaTimes />
          </button>
          <header>KGVHĐ HCM</header>
          <div className="nav-links responsive">
            <NavLink to="/" className="nav-link" onClick={toggleClose}>
              Trang chủ
            </NavLink>
            <div className={showDropdown ? 'dropdown active' : 'dropdown'}>
              <button className="dropbtn" onClick={toggleDropdown}>
                Danh mục bài viết
                <FaCaretDown />
              </button>
              <div className="dropdown-content">
                {categoryLinks.map((link) => {
                  const { text, path } = link;
                  return (
                    <NavLink
                      to={path}
                      key={text}
                      className="nav-link"
                      onClick={toggleClose}
                    >
                      {text}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <NavLink to="/contest" className="nav-link" onClick={toggleClose}>
              Thi trực tuyến
            </NavLink>
            <NavLink to="/login" className="nav-link" onClick={toggleClose}>
              Đăng nhập
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ModalNav;
