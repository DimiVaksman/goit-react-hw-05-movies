import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        footer
      </footer>
    </Container>
  );
};
