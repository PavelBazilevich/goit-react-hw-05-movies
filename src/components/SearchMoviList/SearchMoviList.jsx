import { useLocation } from 'react-router-dom';
import { LinkStyled } from 'Utils/Styled';
import { Text } from './SearchMoviList.styled';

const SearchMoviList = ({ resultQuery }) => {
  const location = useLocation();
  return (
    <>
      {resultQuery.map(({ title, id }) => {
        return (
          <li key={id}>
            <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
              <Text>{title}</Text>
            </LinkStyled>
          </li>
        );
      })}
    </>
  );
};
export default SearchMoviList;
