import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './features/header/Header';
import { WatchList } from './features/watchList/WatchList';
import { SearchResults } from './features/searchResults/SearchResults';




function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <SearchResults /> } />
        <Route path="/WatchList" element={ <WatchList /> } />
      </Routes>       
    </>
  );
}

export default App;
