import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 20px 20px;
`;

export const ReviewList = styled.ul`
  padding: 0 20px;
  display: flex;
  margin: 0 -10px;
  flex-wrap: wrap;
  gap: 3px;
  list-style: disc;
`;

export const ReviewItem = styled.li`
  padding: 5px 5px;
  flex: 1 1 auto;
  margin: 0 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  background-color: #ff4500;
`;

export const ReviewAvtor = styled.p`
  display: block;

  font-weight: 500;
  margin-bottom: 3px;
`;
