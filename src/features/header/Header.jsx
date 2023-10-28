import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieSearchTerm } from '../searchResults/searchResultsSlice';
import { fetchMoviesData } from '../searchResults/getSearchResults';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  // ... your styles
}));

const StyledInputBase = styled(InputBase)((({ theme }) => ({
  // ... your styles
})));

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const movieSearchTerm = useSelector((state) => state.movies.movieSearchTerm);
  const linkRef = useRef();
  const navigate = useNavigate();

  const onSearchChanged = (e) => setSearchTerm(e.target.value);

  const onSearchClicked = () => {
    if (searchTerm !== '') {
      dispatch(setMovieSearchTerm(searchTerm));
      setSearchTerm('');
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
  }

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearchClicked();
      if (linkRef.current) {
        linkRef.current.click();
      }
    }
  };

  useEffect(() => {
    dispatch(fetchMoviesData(movieSearchTerm));
  }, [dispatch, movieSearchTerm]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} mb={4}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <ButtonGroup 
              orientation="vertical"
              color="primary"
              aria-label="vertical contained button group"
              variant="text"
            >
              <Link
                to='/'>
                <Button>
                  <MenuItem onClick={handleClose}>Search</MenuItem>            
                </Button>
              </Link>
              <Link
                to="/WatchList">
                <Button> 
                  <MenuItem onClick={handleClose}>Watchlist</MenuItem>
                </Button>
              </Link>
            </ButtonGroup>
          </Menu>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              Movie Finder & Planner
            </div>
          </Typography>
          <Search onChange={onSearchChanged}>
            <IconButton size="large" aria-label="search" color="inherit" onClick={onSearchClicked}>
              <SearchIcon />
            </IconButton>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onKeyDown={handleEnterKeyPress}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

