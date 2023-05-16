import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  list-style: none;
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 40px; */
  margin: 0;
  padding-top: 80px;
  padding-left: 35px;
  padding-right: 15px;
`;

export const Poster = styled.img`
  border-radius: 20px;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
  color: rgba(254, 99, 134, 80);
`;

export const Title = styled.h2`
  font-size: 24px;
  max-width: 320px;
  text-align: center;
  text-shadow: 1px 5px 7px rgba(0, 0, 0, 0.6);
  margin: 0;
  padding-top: 8px;
  color: rgba(254, 99, 134, 80);
  font-size: 38px;
`;

export const Text = styled.span`
  color: rgb(8, 140, 247);
  font-size: 24px;
  text-shadow: 1px 5px 7px rgba(0, 0, 0, 0.6);
  margin-right: 10px;
`;

export const Info = styled.span`
  color: rgba(254, 99, 134, 80);
  font-size: 32px;
  text-shadow: 1px 5px 7px rgba(0, 0, 0, 0.6);
`;

export const CR = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const CrItem = styled.li`
  margin-right: 40px;
  font-size: 38px;

  padding: 10px;
  text-align: center;
  border-radius: 50px;
  background-color: rgb(255 141 167);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(8, 140, 247);
  text-shadow: 1px 5px 7px rgba(0, 0, 0, 0.6);
  border-radius: 50px;
  background-color: rgb(255 141 167);
  :focus {
    color: rgba(171, 238, 45, 0.5);
  }
  :hover {
    color: rgba(171, 238, 45, 0.5);
  }
`;
