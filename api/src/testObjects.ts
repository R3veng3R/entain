import { MovieEntity } from './movie/entity/movie.entity';
import { GenreEntity } from './movie/entity/genre.entity';
import { TmdbMovieResponse } from './movie/type/tmdbMovieResponse.type';

export const testGenreEntity: GenreEntity = {
  id: 1,
  name: 'Fantasy',
};

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
  genres: [testGenreEntity],
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

export const testTmdbMovieResponse: TmdbMovieResponse = {
  id: 1,
  adult: false,
  popularity: 111,
  title: 'test response',
  original_title: 'test original title',
  genres: [{ id: 1, name: 'Horror' }],
  backdrop_path: '',
  poster_path: '',
  overview: 'test overview',
  vote_average: 10,
};
