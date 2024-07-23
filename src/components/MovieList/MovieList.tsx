import React, { useMemo } from 'react';
import Movie from '../Movie/Movie';
import './MovieList.css';
import { MovieType } from '../../types/types';


interface MovieListProps {
  movies: MovieType[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const memoizedMovies = useMemo(() => {
    return movies.map(movie => (
      <Movie
        data={movie}
        id={movie.id}
        key={movie.id}
        title={movie.title}
        vote_average={parseFloat(movie.vote_average.toFixed(1))}
        overview={movie.overview}
        poster_path={movie.poster_path}
        
      />
    ));
  }, [movies]);
  
  
  
  return (
    <div className="movie-list pb-96">
      
      {memoizedMovies}
      
    </div>
  );
};

export default MovieList;
