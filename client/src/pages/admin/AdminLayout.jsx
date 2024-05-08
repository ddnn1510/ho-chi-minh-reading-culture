import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/admin/Admin';
import { BigSidebar, Navbar, SmallSidebar } from '../../components/admin';
import { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

const AdminLayout = () => {
  // temp
  const user = { name: 'ddnn' };
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('logout user');
  };

  return (
    <AdminContext.Provider
      value={{ user, showSidebar, toggleSidebar, logoutUser }}
    >
      <Wrapper>
        <main className="admin">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="admin-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </AdminContext.Provider>
  );
};
export const useAdminContext = () => useContext(AdminContext);
export default AdminLayout;
