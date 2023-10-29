import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Grid, Typography, Box, Button } from '@mui/material';
import { removeFromWatchlist } from './watchListSlice';


export function WatchList() {
  const dispatch = useDispatch();
  const movieWatchList = useSelector((state) => state.watchList.watchList);
  
  const handleRemoveFromWatchlist = (movie) => {
    dispatch(removeFromWatchlist(movie));
  };  

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%', // Ensures all cards have the same height
  };


  const watchList = movieWatchList && movieWatchList.map((item) => (
    <Grid key={item.imdbID} item xs={12} sm={6} md={4} lg={2}>
      <Card style={cardStyle}>
        <img src={item.Poster} alt='Film Poster' />
        <CardContent style={{ flex: 1 }}>
          <Typography variant="h6" component="div">
            {item.Title}
          </Typography>
          <Typography color="textSecondary">
            {item.Year}
          </Typography>
          <Button 
            variant="contained"  
            onClick={() => handleRemoveFromWatchlist(item)}>
              Remove
          </Button>
        </CardContent>
      </Card>
    </Grid>
  ));


  return (
    <div>
      <Grid container spacing={2} justifyContent="center" alignItems="center" item xs={12} sm={6} md={12}>
        <Typography variant="h4" component="div">
          Watch List
        </Typography>
      </Grid>
      <Box mb={2} />
      <Grid container spacing={2} item xs={12} sm={6} md={12}>
        {watchList}
      </Grid>
    </div>
  );
}