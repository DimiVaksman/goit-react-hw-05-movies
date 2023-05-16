import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '7510784cb92b403b6cb85c091d4aabc9';

  export const fetchTrendMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
  
    return data;
  };



  export const fetchMovies = async query => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=${query}&page=1&include_adult=false`
    );
  
    return data;
  };




  export const fetchPoster = async () => {
    const { data } = await axios.get(
      `https://image.tmdb.org/t/p/original/`
    );
  
    return data;
  };



  export const fetchCast = async movieId => {
    const { data } = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
  
  
    return data;
  };

  export const fetchReviews = async movieId => {
    const { data } = await axios.get(
      `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
  
    return data;
  };

  export const fetchMovieDetails = async movieId => {
    const { data } = await axios.get(
      `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`
    );
  
    return data;
  };