import { Injectable } from '@nestjs/common';
import { MovieRepository } from '../repository/movie.repository';
import { MovieMapper } from '../mapper/movie.mapper';
import { MovieRequest } from '../type/movieRequest.type';
import { Movie } from '../type/movie.type';

@Injectable()
export class MovieService {
  constructor(
    private readonly movieRepository: MovieRepository,
    private readonly movieMapper: MovieMapper,
  ) {}

  async getMovieList(request: MovieRequest): Promise<Movie[]> {
    const movies = await this.movieRepository.findAll(request);
    return this.movieMapper.mapToResponses(movies);
  }
}
