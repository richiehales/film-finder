import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Grid, Typography, Box, Button } from '@mui/material';
import { addMovieToWatchList, setBadgeCount } from '../watchList/watchListSlice';
import Image from 'mui-image'


export function SearchResults() {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.movies.movies.Search);
  const searchTerm = useSelector((state) => state.movies.movieSearchTerm);
  const movieWatchList = useSelector((state) => state.watchList.watchList);
  const badgeCount = useSelector((state) => state.watchList.badgeCount);
  

  
  const handleAddToWatchlist = (movie) => {
  const movieExistsInSearchResults = movieWatchList.find(
    (item) => item.imdbID === movie.imdbID
  );
  if (!movieExistsInSearchResults) {
    // If the movie doesn't exist, dispatch the actions
    dispatch(addMovieToWatchList(movie));
    dispatch(setBadgeCount(badgeCount + 1));
  }
  else {

  }
};

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%', // Ensures all cards have the same height
  };


  const moviesSearchResults = searchResults && searchResults.map((item) => (
    <Grid key={item.imdbID} item xs={12} sm={6} md={4} lg={2}>
      <Card style={cardStyle}>
      <Image src={item.Poster} alt='Film Poster' />
        <CardContent style={{ flex: 1 }}>
          <Typography variant="h6" component="div">
            {item.Title}
          </Typography>
          <Typography color="textSecondary">
            {item.Year}
          </Typography>
          <Button 
            variant="contained"  
            onClick={() => handleAddToWatchlist(item)}>
              Add To Watchlist
          </Button>
        </CardContent>
      </Card>
    </Grid>
  ));


  return (
    <div>
      <Grid container spacing={2} justifyContent="center" alignItems="center" item xs={12} sm={6} md={12}>
        <Typography variant="h4" component="div">
          Search Results
        </Typography>
      </Grid>
      <Box mb={2} />
      <Grid container spacing={2} justifyContent="center" alignItems="center" item xs={12} sm={6} md={12}>
        <Typography variant="h5" component="div">
          {searchTerm}
        </Typography>
      </Grid>
      <Box mb={2} />
      <Grid container spacing={2} item xs={12} sm={6} md={12}>
        {moviesSearchResults}
      </Grid>
    </div>
  );
}

