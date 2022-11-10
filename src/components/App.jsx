import { Routes, Route } from 'react-router-dom';
import Movies from 'Pages/Movies/Movies';
import Home from '../Pages/Home/Home';
import Layout from './Layout/Layout';
import MoviDetails from 'Pages/MoviDetails/MoviDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MoviDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
