import { Injectable } from '@nestjs/common';
import { MovieRepository } from '../repository/movie.repository';
import { MovieMapper } from '../mapper/movie.mapper';
import { Movie } from '../types';

@Injectable()
export class MovieService {
  constructor(
    private readonly movieRepository: MovieRepository,
    private readonly movieMapper: MovieMapper,
  ) {}

  getHello(): string {
    return 'Hello Movie Service';
  }

  async getMovieList(): Promise<Movie[]> {
    const movies = await this.movieRepository.findAll();
    return this.movieMapper.mapToResponses(movies);
  }
}
