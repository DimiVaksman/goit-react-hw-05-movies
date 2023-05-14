import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
`;

export const Header = styled.header`
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  margin: 0 auto;
  padding: 0;
  height: 100px;
  /* border-radius: 30px; */
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding-top: 20px;
  margin: 0;
`;
export const NavItem = styled.li`
  margin-right: 135px;
  font-size: 48px;
  text-shadow: 1px 5px 7px rgba(0, 0, 0, 0.6);
`;

const StyledLink = styled(NavLink)`
  color: red;
`;

export const Logo = styled.img`
  position: absolute;
  left: 45px;
  top: 5px;
`;
