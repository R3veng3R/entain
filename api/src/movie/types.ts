export interface Movie {
  id: number;
  title: string;
  overview: string;
  originalTitle: string;
  posterPath: string;
}

export interface MovieRequest {
  title?: string;
}

export interface TmdbMovieResponse {
  id: number;
  adult: boolean;
  popularity: number;
  title: string;
  original_title: string;
  genres: [{ id: number; name: string }];
  backdrop_path: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}
