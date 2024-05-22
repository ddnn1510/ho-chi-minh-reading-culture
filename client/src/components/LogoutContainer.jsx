import { useState } from 'react';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { FaUserCircle } from 'react-icons/fa';
import { useHomeLayoutContext } from '../pages/HomeLayout';
import { MdOutlineLogout } from 'react-icons/md';
import { FaRegCircleUser } from 'react-icons/fa6';

const LogoutContainer = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { currentUserData, logout } = useHomeLayoutContext();

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

  return (
    <Wrapper>
      <div
        className={showDropdown ? 'user-ava active' : 'user-ava'}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <FaUserCircle />
      </div>
      <div className={showDropdown ? 'dropdown show-dropdown' : 'dropdown'}>
        <div className="dropdown-item">
          <FaRegCircleUser />
          {currentUserData?.user?.name || ''}
        </div>
        <div className="dropdown-item logout" onClick={handleLogout}>
          <MdOutlineLogout />
          Đăng xuất
        </div>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
