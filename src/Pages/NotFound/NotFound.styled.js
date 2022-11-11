import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.main`
  text-alain: center;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Icon = styled.span`
  justify-content: center;
  display: flex;
  font-size: 200px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 60px;
  justify-content: center;
  display: flex;
  margin-bottom: 30px;
`;

export const Link = styled(NavLink)`
  justify-content: center;
  display: flex;
  align-items: center;
  width: 200px;
  border-rsdius: 5px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: orange;
  color: black;
  font-weight: 500;
  :hover {
    color: white;
  }
`;
