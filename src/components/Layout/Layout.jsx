import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  Container,
  NavList,
  NavItem,
  Header,
  Logo,
  LogoFooter,
  Footer,
} from './Layout.styled';
import LogoSvg from '../Logo/3d-movie.svg';
import LogoSvgFooter from '../Logo/popcorn.svg';

const Layout = () => {
  return (
    <Container>
      <Header>
        <NavList>
          <NavItem>
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: 'none',
                  fontWeight: isActive ? 'bold' : '',
                  color: isActive ? 'rgba(171, 238, 45, 0.5)' : '#088CF7',
                };
              }}
              to="/"
            >
              <Logo src={LogoSvg} alt="logo" width="80" />
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: 'none',
                  fontWeight: isActive ? 'bold' : '',
                  color: isActive ? 'rgba(171, 238, 45, 0.5)' : '#088CF7',
                };
              }}
              to="/movies"
            >
              Movies
            </NavLink>
          </NavItem>
        </NavList>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer>
        <NavList>
          <NavItem>
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: 'none',
                  fontWeight: isActive ? 'bold' : '',
                  color: isActive ? 'rgba(171, 238, 45, 0.5)' : '#088CF7',
                };
              }}
              to="/"
            >
              <LogoFooter src={LogoSvgFooter} alt="logo" width="80" />
              here should be footer
            </NavLink>
          </NavItem>
        </NavList>
      </Footer>
    </Container>
  );
};

export default Layout;
