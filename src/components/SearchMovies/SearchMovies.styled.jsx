import styled from '@emotion/styled';

export const Input = styled.input`
  padding: 12px;
  font-size: 29px;
  border-width: 2px;
  border-color: #cccccc;
  background-color: rgb(163, 208, 245);
  color: rgba(171, 238, 45, 0.5);
  border-style: hidden;
  border-radius: 35px;
  box-shadow: 1px 0px 17px rgba(66, 66, 66, 0.7);
  margin-right: 20px;
  text-align: center;
`;

export const Button = styled.button`
  font-family: Nunito;
  font-weight: 900;
  font-size: 18px;
  color: #0077b6;
  background-color: rgba(254, 99, 134, 80);
  padding: 10px 30px;
  border: none;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition: 2135ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
`;

export const Form = styled.form`
display: flex`