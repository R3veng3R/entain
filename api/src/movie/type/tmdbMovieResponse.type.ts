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
