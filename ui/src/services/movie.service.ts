import { api } from './api';

export const getData = async () => {
  const { data } = await api.get('/movie');
  return data;
}