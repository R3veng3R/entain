import { useQuery } from '@tanstack/react-query';
import { api } from '../../services/api';
import { Movie } from '../MoviePage/types';

export function useMovies() {
  return useQuery({
    queryKey: ['movies'],
    queryFn: (): Promise<Movie[]> => api.get('/movie').then((response) => response.data),
  });
}
