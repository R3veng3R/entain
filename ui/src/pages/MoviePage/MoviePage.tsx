import { useMovies } from '../hooks/useMovies';

export const MoviePage = () => {
  const { data: movies } = useMovies();
  return <div>{movies?.map((movie) => <div key={movie.id}>{movie.title}</div>)}</div>;
};
