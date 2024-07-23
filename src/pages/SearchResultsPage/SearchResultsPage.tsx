import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch} from '../../hooks/useFetch';
import MovieList from '../../components/MovieList/MovieList';
import { MovieType } from '../../types/types';
import './SearchResultsPage.css'







const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  console.log(query)
  const API_KEY = "4949731af39971dd8548c26b8a404cde";
  const url =`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`


  console.log(url)


  const { data, isPending, error } = useFetch<{ results: MovieType[] }>(url);
  console.log(data)


  return (
    <div className="search-page">
      <h1 className='text-white text-4xl mb-4 pl-10'>Resultados de la busqueda: {query}</h1>
      <div className="show-status ">
      {isPending && <p className='w-full h-screen text-white text-5xl text-center'>Loading...</p>}
      {error && <p className='w-full h-screen text-white text-5xl text-center'>{error}</p>}
      {data && <MovieList movies={data.results} />}
      {data?.results.length === 0 && <p className='w-full h-screen text-white text-5xl text-center'>No movies found</p>}
    
      </div>
      </div>
  )

  
};

export default SearchResultsPage;
