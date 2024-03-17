import { Controller, Get, Query } from '@nestjs/common';
import { MovieService } from '../service/movie.service';
import { Movie, MovieRequest } from '../types';

@Controller('/movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getMovies(@Query() request: MovieRequest): Promise<Movie[]> {
    return await this.movieService.getMovieList(request);
  }
}
