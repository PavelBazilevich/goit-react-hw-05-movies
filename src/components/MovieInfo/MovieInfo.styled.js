import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 4px;
  padding: 20px 20px;
  box-shadow: 0px 6px 5px -4px rgb(0 0 0 / 55%);
`;

export const Image = styled.img`
  width: 300px;
`;

export const FilmInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 1000px;
  padding: 8px 4px;
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Heading = styled.p`
  margin-bottom: 30px;

  font-size: 25px;
  font-weight: 500;
`;
