export interface MovieType {
    id: number;
    title: string;
    vote_average: number;
    overview: string;
    poster_path: string;
    
  }

export interface MovieDetailType {
    id: number;
    title: string;
    original_title: string;
    vote_average: number;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    genres: GenreType[];
    runtime: number;
    release_date: string;
    
  }

  export interface GenreType {
    id: number;
    name: string;
  }