import styled from 'styled-components';
const { NavLink } = require('react-router-dom');
const { Link } = require('react-router-dom');

export const NavItem = styled(NavLink)`
  font-size: 30px;
  display: inline-block;
  list-style: none;
  margin-right: 30px;
  color: black;
  padding: 3px;
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

export const LinkStyled = styled(Link)`
  font-size: 18px;
  display: inline-block;
  list-style: none;
  margin-left: 30px;
  color: black;
  padding: 3px;
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
