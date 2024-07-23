import React, { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { MovieType } from '../../types/types';
import './WatchlistPage.css';

const WatchlistPage: React.FC = () => {
  const [watchlist, setWatchlist] = useState<MovieType[]>([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    setWatchlist(storedWatchlist);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="watchlist-page">
      <h1 className="text-white text-4xl mb-4 pl-10">Watchlist</h1>
      {watchlist.length === 0 ? (
        <p className='w-full h-screen text-white text-5xl text-center'>No movies in watchlist.</p>
      ) : <MovieList movies={watchlist} />}
      
    </div>
  );
};

export default WatchlistPage;
