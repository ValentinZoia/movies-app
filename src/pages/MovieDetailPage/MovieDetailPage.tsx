import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { MovieDetailType } from "../../types/types";
import ButtonWatch from "../../components/ButtonWatch/ButtonWatch";
import "./MovieDetailPage.css";

const API_KEY = "4949731af39971dd8548c26b8a404cde";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetailPage: React.FC = () => {
  const elementRef = useRef<HTMLImageElement>(null)
  const { id } = useParams<{ id: string }>();
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;

  const { data, isPending, error } = useFetch<MovieDetailType>(url);
  

  if (isPending) {
    return (
      <p className="bg-gray-800 w-full h-screen text-white text-5xl text-center">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="bg-gray-800 w-full h-screen text-white text-5xl text-center">
        Error: {error}
      </p>
    );
  }

  if (!data) {
    return (
      <p className="bg-gray-800 w-full h-screen text-white text-5xl text-center">
        No movie found
      </p>
    );
  }

  return (
    <div className="movie-detail-page  text-white w-full flex justify-center items-start">
      <div className="movie-detail-container  h-screen w-4/6">
        <div className="movie-detail-container-header">
          <div className="movie-detail-header-title">
            <h1>{data.title}</h1>
            <h3  translate="no">Original title: {data.original_title}</h3>
            <ul  translate="no" className="movie-detail-info-inline-list">
              <li>
                <p>{data.release_date}</p>
              </li>
              <li>
                <p>{data.runtime}min</p>
              </li>
            </ul>
          </div>
          <div className="movie-detail-header-icon">
            <h2>{parseFloat(data.vote_average.toFixed(1))}<span className="/10">/10</span>⭐</h2>
          </div>
        </div>
        <div className="movie-detail-container-images">
          <img
            src={`${IMAGE_BASE_URL}${data.poster_path}`}
            alt={`Poster of${data.title}`}
            className="movie-detail-image-poster"
            ref={elementRef}
          />
          <img
            src={`${IMAGE_BASE_URL}${data.backdrop_path}`}
            alt={`backdrop of${data.title}`}
            className="movie-detail-image-backdrop "
          />
        </div>
        <div className="movie-detail-container-fotter ">
          <ul className="movie-detail-genres-list">
            {data.genres.map((genre) =><li key={genre.id} className="movie-detail-genre"><p>{genre.name}</p></li>)}
            </ul>
          
          <p className="movie-detail-overview">{data.overview}</p>

          
          <div className="movie-buttons flex gap-1.5">
            <ButtonWatch className='movie-buttons flex gap-1.5' movieData={data} movieId={data.id} />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
