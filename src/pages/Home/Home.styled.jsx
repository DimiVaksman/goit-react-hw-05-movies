import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const TrendMovieList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  align-items: center;
  justify-content: center;
  background-color: rgba(171, 238, 45, 0.5);
  /* border-radius: 40px; */
  margin: 0;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
  padding-top: 80px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 80px;
`;

export const TitleTrendMovies = styled.h2`
  font-size: 24px;
  max-width: 320px;
  text-align: center;
  text-shadow: 1px 5px 7px rgba(0, 0, 0, 0.6);
  margin: 0;
  padding-top: 8px;
  color: rgba(254, 99, 134,80);
`;

export const Loader = styled.div`
  display: flex;
  position: absolute;
  left: 550px;
  top: 30px;
`;

export const TrendMovieItem = styled.li`
  gap: 50px;
`;

export const TrendMovieImg = styled.img`
  border-radius: 20px;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(254, 99, 134,80);
`;

export const Title = styled.h1`
  background-color: rgba(171, 238, 45, 0.5);
  color: rgba(254, 99, 134,80);
  margin: 0 auto;
  padding: 15px;
  height: 50px;
  /* border-radius: 30px; */
  text-align: center;
  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.6);
`;

