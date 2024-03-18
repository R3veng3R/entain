import { Genre } from '../types';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../../services/api';

export function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: (): Promise<Genre[]> => api.get('/movie/genre', ).then((response) => response.data),
  });
}
