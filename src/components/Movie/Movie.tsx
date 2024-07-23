import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { MovieType } from '../../types/types';



interface MovieProps {
  data: MovieType;
  id : number
  title: string;
  vote_average: number;
  poster_path: string;
  overview: string;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Movie: React.FC<MovieProps> = ({ data, id, title, vote_average, poster_path, overview}) => {
  const [hover, setHover] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (hover) {
      timeout = setTimeout(() => {
        setShowCard(true);
      }, 300); // Mostrar después de 2 segundos
    } else {
      setShowCard(false);
    }

    return () => clearTimeout(timeout);
  }, [hover]);

 const handlerClick = () => {
  window.location.href = `/movie/${encodeURIComponent(id)}`
 }
    


  return (
    <div
      className="movie"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setShowCard(false); // Ocultar inmediatamente al salir del hover
      }}
      
    >
      <img src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} onClick={handlerClick}/>
      {showCard && (
        <div className="movie-card-container ease-in-out duration-300">
          <MovieCard
            data={data}
            key={id}
            id={id}
            title={title}
            vote_average={parseFloat(vote_average.toFixed(1))}
            overview={overview}
            poster_path={poster_path}
          />
        </div>
      )}
    </div>
  );
};

export default Movie;
