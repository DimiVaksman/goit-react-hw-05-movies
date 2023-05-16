import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesList = styled.div`
  list-style: none;
  background-color: rgba(171, 238, 45, 0.5);
  /* border-radius: 40px; */
  margin: 0;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
  padding-top: 40px;
  padding-bottom: 80px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Title = styled.h2`
  color: rgba(254, 99, 134, 80);
  margin: 0 auto;
  padding-bottom: 25px;
  height: 50px;
  text-align: center;
  text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.6);
  font-size: 44px;
  margin: 0;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
`;

export const Back = styled.img`


`


export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  align-items: center;
  justify-content: center;
  /* border-radius: 40px; */
  margin: 0;
  padding-top: 80px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const MovieItem = styled.li`
  gap: 50px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(254, 99, 134,80);
`;

export const TitleMovies = styled.h2`
  font-size: 24px;
  max-width: 320px;
  text-align: center;
  text-shadow: 1px 5px 7px rgba(0, 0, 0, 0.6);
  margin: 0;
  padding-top: 8px;
`;


export const BackBtn = styled.button`
display: flex;
background-color: rgb(8, 140, 247);
border-radius: 50px;`

export const BtnBackStyled = styled.div`
    padding-left: 35px;
`