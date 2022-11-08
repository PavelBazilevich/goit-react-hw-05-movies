import PropTypes from 'prop-types';
// import { generateUrl } from 'services/utils';
import { FilmInfo, Layout, Image, Heading, Title } from './MovieInfo.styled';

export const MovieInfo = ({ moviInfo }) => {
  const {
    poster_path,
    original_title,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = moviInfo;

  return (
    <Layout>
      {/* <Image src={generateUrl(poster_path)} alt={original_title} /> */}
      <FilmInfo>
        <Title>
          {title} ({String(release_date).slice(0, 4)})
        </Title>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <Heading>Overviev</Heading>
        <p>{overview}</p>
        <Heading>Genres</Heading>
        <p>{genres.map(genre => genre.name).join(' ')}</p>
      </FilmInfo>
    </Layout>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};
