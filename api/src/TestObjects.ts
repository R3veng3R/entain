import { MovieEntity } from './movie/entity/movie.entity';

export const testMovieEntity1: MovieEntity = {
  id: 1,
  tmdbId: 1,
  overview: 'test overview',
  adult: false,
  title: 'test title',
  originalTitle: 'test original title',
  posterPath: '/posterPath.jpg',
  voteAverage: 8.5,
  popularity: 10,
};

export const testMovieEntity2: MovieEntity = {
  id: 2,
  tmdbId: 2,
  overview: 'test overview 2',
  adult: false,
  title: 'test title 2',
  originalTitle: 'test original title 2',
  posterPath: '/posterPath2.jpg',
  voteAverage: 3.5,
  popularity: 10,
};
