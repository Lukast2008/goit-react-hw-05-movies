import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  color: black;
  background-color: aqua;

  &.active {
    color: orange;
  }
`;

const Layout = () => {
  return (
    <>
      <nav>
        <NavItem to="/">Home </NavItem>
        <NavItem to="movies"> Movies</NavItem>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
