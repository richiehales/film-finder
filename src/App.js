import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './features/header/Header';
import { WatchList } from './features/watchList/WatchList';
import { SearchResults } from './features/searchResults/SearchResults';
import { Footer } from './features/footer/Footer'




function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <SearchResults /> } />
        <Route path="/WatchList" element={ <WatchList /> } />
      </Routes> 
      <Footer />      
    </>
  );
}

export default App;
