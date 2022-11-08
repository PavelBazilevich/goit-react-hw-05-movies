import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 0;
  margin-bottom: 16px;
  box-shadow: rgb(0 0 0 / 55%) 1px 2px 9px 0px;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  font-size: 30px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-left: 20px;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
