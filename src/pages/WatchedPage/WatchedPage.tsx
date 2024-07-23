import React, { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { MovieType } from '../../types/types';
import './WatchedPage.css';

const WatchedPage: React.FC = () => {
  const [watched, setWatched] = useState<MovieType[]>([]);

  useEffect(() => {
    const storedWatched = JSON.parse(localStorage.getItem('watched') || '[]');
    setWatched(storedWatched);
    window.scrollTo(0, 0);
  }, []);

  
 
  return (
    <div className="watched-page">
      <h1 className="text-white text-4xl mb-4 pl-10">Watched</h1>
      {watched.length === 0 ? (
        <p className='w-full h-screen text-white text-5xl text-center'>No movies watched yet.</p>
      ) : <MovieList movies={watched} />}


      
    </div>
  );
};

export default WatchedPage;
