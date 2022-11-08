import { Link, useParams, useLocation } from 'react-router-dom';
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

  console.log(moviInfo);

  return (
    <main>
      <>
        <Link to={gobackLink}> Go Back</Link>
        {!moviInfo && <MovieInfo moviInfo={moviInfo} />}
      </>
    </main>
  );
};

export default MoviDetails;
