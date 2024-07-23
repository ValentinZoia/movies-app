import React from 'react';
// import { Album } from './components/Album';
import { NavBar } from './components/NavBar/NavBar';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';
import  MovieDetailPage  from './pages/MovieDetailPage/MovieDetailPage';
import WatchlistPage from './pages/WatchlistPage.tsx/WatchlistPage';
import WatchedPage from './pages/WatchedPage/WatchedPage';




const App: React.FC = () => {
  

  return (
    <>
     
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />  
        <Route path="/search" element={<SearchResultsPage/>} />
        <Route path="/movie/:id" element={<MovieDetailPage/>} />
        <Route path='/watchlist' element={<WatchlistPage/>} />
        <Route path='/watched' element={<WatchedPage/>} />
      </Routes>
      
      
    </>
  );
}

export default App;

