import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
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
  padding-bottom: 80px;`

export const StyledLink = styled(Link)`

`;

export const Back = styled.img`
 `


    export const BackBtn = styled.button`
    border-radius: 50px;
    background-color: rgb(8, 140, 247);`


export const BackGround = styled.div`
background-color: rgba(171, 238, 45, 0.5);
-webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
  padding-bottom: 30px;`

  export const BtnBackStyled = styled.div`
      padding-top: 30px;
    padding-left: 45px;`