import Wrapper from '../../assets/wrappers/admin/BigSidebar';
import NavLinks from './NavLinks';
import { useAdminContext } from '../../pages/admin/AdminLayout';

const BigSidebar = () => {
  const { showSidebar } = useAdminContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>KGVHĐ Hồ Chí Minh</header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
