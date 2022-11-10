import styled from 'styled-components';

export const Input = styled.input`
  width: 300px;
  box-sizing: border-box;
  border: 2px solid orange;
  border-radius: 4px;
  font-size: 18px;
  background-color: white;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  margin-left: 5px;
  border-radius: 5px;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
    background-color: orange;
    color: white;
  }
`;

export const Form = styled.form`
  margin-bottom: 20px;
`;
