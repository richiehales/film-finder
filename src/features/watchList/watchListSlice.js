import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchList: [
    {
      Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      Title: "The Avengers",
      Type: "movie",
      Year: "2012",
      imdbID: "tt0848228"
    },
    {
      Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
      Title: "Avengers: Endgame",
      Type: "movie",
      Year: "2019",
      imdbID: "tt4154796"
    },
    {
      Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
      Title: "Star Wars: Episode IV - A New Hope",
      Type: "movie",
      Year: "1977",
      imdbID: "tt0076759"
    },
  ]
}


export const watchListSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    addMovieToWatchList: (state, action) => {
      state.watchList.push(action.payload);
    },
    removeFromWatchlist: (state, action) => {
      // Use filter to remove the item with the given imdbID
      state.watchList = state.watchList.filter(item => item.imdbID !== action.payload.imdbID);
    },
  }  
})


export const { addMovieToWatchList, removeFromWatchlist } = watchListSlice.actions;
export default watchListSlice.reducer;