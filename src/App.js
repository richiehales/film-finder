import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './features/header/Header';
import { WatchList } from './features/watchList/WatchList';
import { SearchResults } from './features/searchResults/SearchResults';
import { Footer } from './features/footer/Footer';
import { createTheme, ThemeProvider } from '@mui/material';



const theme = createTheme({
  palette: {
    primary: {
      main: '#253439'
    },
    secondary: {
      main: '#ffff'
    },
  }
})


function App() {
  return (
    <>
      <ThemeProvider theme={theme}> 
        <Header />
        <Routes>
          <Route path="/" element={ <SearchResults /> } />
          <Route path="/WatchList" element={ <WatchList /> } />
        </Routes> 
        <Footer />
      </ThemeProvider>     
    </>
  );
}

export default App;
