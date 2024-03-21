import { useQuery } from '@tanstack/react-query';
import { api } from '../../../services/api';
import { Genre } from '../types';

export function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: (): Promise<Genre[]> => api.get('/movie/genre').then((response) => response.data),
  });
}
