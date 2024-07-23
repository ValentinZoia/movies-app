import React, { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import MovieList from '../../components/MovieList/MovieList';
import './HomePage.css';
import { MovieType } from '../../types/types';






const HomePage: React.FC = () => {
  const API_KEY = "4949731af39971dd8548c26b8a404cde";
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const { data, isPending, error } = useFetch<{ results: MovieType[] }>(url);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <h1 className='text-white text-4xl pl-10'>Trending</h1>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <MovieList movies={data.results} /> }
     </div>   
    
  );
};

export default HomePage;
