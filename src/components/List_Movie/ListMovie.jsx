import { useLocation } from 'react-router-dom';
import { LinkStyled } from 'Utils/Styled';
import { Text } from 'components/SearchMoviList/SearchMoviList.styled';
const ListMovie = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.length > 0 &&
        movies.map(({ title, id }) => (
          <li key={id}>
            <LinkStyled to={`movies/${id}`} state={{ from: location }}>
              <Text>{title}</Text>
            </LinkStyled>
          </li>
        ))}
    </>
  );
};
export default ListMovie;
