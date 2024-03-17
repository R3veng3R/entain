import { useQuery } from '@tanstack/react-query';
import { api } from '../../../services/api';
import { Movie, MovieFilters } from '../types';

export function useMovies(params?: MovieFilters) {
  return useQuery({
    queryKey: ['movies', params],
    queryFn: (): Promise<Movie[]> => api.get('/movie', { params }).then((response) => response.data),
  });
}
