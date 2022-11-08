import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'Utils/Api';
import { Title, Error } from './Home.styled';
import ListMovie from 'components/List_Movie/ListMovie';

const Home = () => {
  const [movies, setMovies] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fethMovies = async () => {
      try {
        const fethPopularMovies = await getTrendingMovies();
        setMovies(fethPopularMovies);
      } catch {
        setError(
          'Sorry, it was not possible to download what you were looking for 😥. Please try again 😊'
        );
      }
    };
    fethMovies();
  }, []);

  return (
    <main>
      {!error && <Title>Trending today ✨</Title>}
      {error && <Error>{error}</Error>}
      <ul>
        <ListMovie movies={movies} />
      </ul>
    </main>
  );
};
export default Home;
