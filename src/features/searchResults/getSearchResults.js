import { setSearchResults } from './searchResultsSlice';
import { fetchMovies } from '../../api/api';

export const fetchMoviesData = (movieSearchTerm) => async (dispatch) => {
  try {
    const moviesData = await fetchMovies(movieSearchTerm);
    dispatch(setSearchResults(moviesData));    
  } catch (error) {
    // Handle errors, log, or dispatch an error action if needed
    console.error('Error fetching posts data:', error);
  }
};