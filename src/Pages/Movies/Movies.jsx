import { useState } from 'react';
import { searhMovies } from 'Utils/Api';
import { useSearchParams } from 'react-router-dom';
import { Input, Button, Form } from './Movies.styled';
import SearchMoviList from 'components/SearchMoviList/SearchMoviList';
import { useEffect } from 'react';

const Movies = () => {
  const [resultQuery, setResultQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') return;
    const searchByRequest = async () => {
      try {
        const fethMovi = await searhMovies(query);
        setResultQuery(fethMovi);
      } catch {
        setError(
          'Sorry, it was not possible to download what you were looking for 😥. Please try again 😊'
        );
      }
    };
    searchByRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const hendleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.query.value });
  };

  return (
    <>
      <Form onSubmit={hendleSubmit}>
        <div>
          <Input
            name="query"
            type="text"
            defaultValue={query}
            placeholder="Search..."
          />
          <Button type="submit">Search</Button>
        </div>
      </Form>
      {error && <p>{error}</p>}

      <ul>
        {resultQuery?.length > 0 && (
          <SearchMoviList resultQuery={resultQuery} />
        )}
      </ul>
    </>
  );
};
export default Movies;
