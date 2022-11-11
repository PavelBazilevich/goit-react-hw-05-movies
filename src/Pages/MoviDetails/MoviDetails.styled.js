import styled from 'styled-components';
const { Link } = require('react-router-dom');

export const LinkStyled = styled(Link)`
  font-size: 18px;
  display: inline-block;
  list-style: none;
  margin-left: 30px;
  color: black;
  padding: 10px;
  border-radius: 5px;

  &.active {
    color: orange;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: orange;
    color: white;
  }
`;

export const Title = styled.p`
  margin: 10px 35px;
  font-size: 25px;
  font-weight: 400;
`;
