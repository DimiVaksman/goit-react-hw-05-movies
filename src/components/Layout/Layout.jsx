import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, NavList, NavItem, Header, Logo } from './Layout.styled';
import LogoSvg from "../Logo/3d-movie.svg"

export const Layout = () => {
  return (
    <Container>
      <Header>
        <NavList>
          <NavItem>
            <Logo src={LogoSvg} alt="logo" width="80" />
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
        <Outlet />
      </main>
      <footer>footer</footer>
    </Container>
  );
};
