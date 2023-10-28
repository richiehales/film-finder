import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  movieSearchTerm: 'avengers'
}


export const searchResultsSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.movies = action.payload;
    },
    setMovieSearchTerm: (state, action) => {
      state.movieSearchTerm = action.payload;
    }
  }  
})


export const { setSearchResults, setMovieSearchTerm } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
