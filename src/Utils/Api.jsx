import axios from 'axios';
const apiKey = '53b17a0d0ffee53cfb4c8768c7c3aa3a';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios.get('trending/movie/day', {
    params: {
      page: 1,
      api_key: apiKey,
    },
  });
  return response.data.results;
};

export const searhMovies = async searchqQuery => {
  const response = await axios.get('search/movie', {
    params: {
      api_key: apiKey,
      query: searchqQuery,
    },
  });
  return response.data.results;
};

export const getDetails = async id => {
  const response = await axios.get(`movie/${id}`, {
    params: {
      api_key: apiKey,
    },
  });
  return response.data;
};
