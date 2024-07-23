import React from "react";

import "./Movie.css";
import ButtonWatch from "../ButtonWatch/ButtonWatch";
import { MovieType } from "../../types/types";



interface MovieCardProps {
  data: MovieType
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  overview: string;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard: React.FC<MovieCardProps> = ({
  data,
  id,
  title,
  vote_average,
  poster_path,
  overview,
}) => {

  const handlerClick = () => {
    window.location.href = `/movie/${encodeURIComponent(id)}`
   }
      


  return (
    <div className="movie-card mb-10">
      <img
        src={`${IMAGE_BASE_URL}${poster_path}`}
        alt={title}
        className="movie-card-image"
        onClick={handlerClick}
      />
      <div className="movie-info">
        
        <ButtonWatch className='movie-buttons flex absolute top-[-25px] gap-2' movieData={data} movieId={id} />
         
        

        <h2 className="movie-card-title">{title}</h2>
        <p className="movie-card-rating">
          {parseFloat(vote_average.toFixed(1))}⭐
        </p>
        <p className="movie-card-overview inactive">Overview: {overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
