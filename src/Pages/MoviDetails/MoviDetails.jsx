import { useParams, useLocation } from 'react-router-dom';
import { LinkStyled } from './MoviDetails.styled';
import { useEffect, useState } from 'react';
import { getDetails } from 'Utils/Api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

const MoviDetails = () => {
  const { id } = useParams();
  const [moviInfo, setMoviInfo] = useState({}) ?? {};
  const [error, setError] = useState(null);

  useEffect(() => {
    const fethDetails = async () => {
      try {
        const fethMoviDetails = await getDetails(id);
        setMoviInfo(fethMoviDetails);
      } catch {
        setError('Oops... 😥. Please try again 😊');
      }
    };
    fethDetails();
  }, []);

  const location = useLocation();
  const gobackLink = location.state?.from ?? '/movies';

  return (
    <main>
      <>
        <LinkStyled to={gobackLink}> ⬅️ Go Back</LinkStyled>
        {error && <h2>{error}</h2>}
        {moviInfo !== 0 && <MovieInfo moviInfo={moviInfo} />}
      </>
    </main>
  );
};

export default MoviDetails;
