import { createUrl } from '../../Utils/createUrl';
import { useParams } from 'react-router-dom';
import { getCast } from 'Utils/Api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Layout, CastList, CastItem, ActorName } from './Cast.styled';

const Cast = () => {
  const [castData, setCastData] = useState([]) ?? {};
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fethCasts = async () => {
      try {
        const fethCast = await getCast(id);
        setCastData(fethCast);
      } catch {
        setError('Oops... 😥. Please try again 😊');
      }
    };
    fethCasts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Layout>
      {error && <p>{error}</p>}
      {castData?.length === 0 && (
        <p>We didn't find any actors for this movie.</p>
      )}
      {castData?.length > 0 && (
        <CastList>
          {castData.map(
            ({ id, profile_path, original_name, name, character }) => {
              return (
                <CastItem key={id}>
                  <img src={createUrl(profile_path)} alt={original_name} />
                  <ActorName>{name}</ActorName>
                  <p>Character: {character}</p>
                </CastItem>
              );
            }
          )}
        </CastList>
      )}
    </Layout>
  );
};

export default Cast;
