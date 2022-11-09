import { useState } from 'react';
import { searhMovies } from 'Utils/Api';
import { Outlet, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [resultQuery, setResultQuery] = useState([]);
  const [error, setError] = useState(null);

  const searchByRequest = async event => {
    event.preventDefault();
    try {
      const fethMovi = await searhMovies(query);
      setResultQuery(fethMovi);
      console.log(resultQuery);
    } catch {
      setError(
        'Sorry, it was not possible to download what you were looking for 😥. Please try again 😊'
      );
    }
  };

  // const createMarcup = resultQuery => {
  //   if (resultQuery !== null) {
  //     return resultQuery.map(resultQuer => {
  //       <li key={resultQuer.id}>
  //         <Link>
  //           <p>{resultQuer.title}</p>
  //         </Link>
  //       </li>;
  //     });
  //   }
  // };

  return (
    <>
      <form onSubmit={searchByRequest}>
        <div>
          <input
            type="text"
            value={query}
            onChange={e => setSearchParams({ query: e.target.value })}
            placeholder="Search..."
          />
          <button type="submit">Search</button>
        </div>
      </form>
      {error && <p>{error}</p>}

      {/* <ul>{createMarcup()}</ul> */}

      <Outlet />
    </>
  );
};
export default Movies;
