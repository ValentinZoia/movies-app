import React, { useEffect, useState } from 'react';
import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/icomoon/eye";
import {ic_delete} from 'react-icons-kit/md/ic_delete'
import './ButtonWatch.css'
import { MovieType } from '../../types/types';

interface ButtonWatchProps {
  className: string;
  movieData: MovieType;
  movieId: number;
}

const ButtonWatch: React.FC<ButtonWatchProps> = ({ className, movieData, movieId }) => {
  const [inWatchlist, setInWatchlist] = useState(false);
  const [inWatched, setInWatched] = useState(false);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    const watched = JSON.parse(localStorage.getItem('watched') || '[]');
    setInWatchlist(watchlist.some((movie: any) => movie.id === movieId));
    setInWatched(watched.some((movie: any) => movie.id === movieId));
    
  }, [movieId]);

  const handleAddToWatchlist = () => {
    
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    if (inWatchlist) {
      const updatedWatchlist = watchlist.filter((movie: any) => movie.id !== movieId);
      localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
      setInWatchlist(false);
    } else {
      localStorage.setItem('watchlist', JSON.stringify([...watchlist, movieData]));
      setInWatchlist(true);
    }
  };

  const handleAddToWatched = () => {
    
    const watched = JSON.parse(localStorage.getItem('watched') || '[]');
    if (inWatched) {
      const updatedWatched = watched.filter((movie: any) => movie.id !== movieId);
      localStorage.setItem('watched', JSON.stringify(updatedWatched));
      setInWatched(false);
    } else {
      localStorage.setItem('watched', JSON.stringify([...watched, movieData]));
      setInWatched(true);
    }
  };

    

  
  return (
    <div className={`${className}`}>
      <button className={inWatchlist ? "Btn btn-watchlist-remove" : "Btn btn-watchlist-add"} onClick={handleAddToWatchlist}>
        <div className="sign">
        {inWatchlist ? <Icon icon={ic_delete} /> : '+'}
        </div>
        <div className="text">
          {inWatchlist ? 'REMOVE WL' : 'WATCHLIST'}
        </div>
      </button>
      <button className= {inWatched ? "Btn btn-watched-remove" :"Btn btn-watched-add"} onClick={handleAddToWatched}>
        <div className="sign">
        {inWatched ? <Icon icon={ic_delete} /> : <Icon size={20} icon={eye} />}
        </div>
        <div className="text">
          {inWatched ? 'REMOVE WD' : 'WATCHED'}
        </div>
      </button>
    </div>
  );
};

export default ButtonWatch;
