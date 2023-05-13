import axios from 'axios';

  const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '7510784cb92b403b6cb85c091d4aabc9';

  export const fetchTrendMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    // console.log(data);
  
    return data;
  };



  export const fetchMovies = async query => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=${query}&page=1&include_adult=false`
    );
  
    return data;
  };



  const IMG_URL = "https://image.tmdb.org/t/p/original/"


  export const fetchPoster = async () => {
    const { data } = await axios.get(
      `https://image.tmdb.org/t/p/original/`
    );
    console.log(data);
  
    return data;
  };