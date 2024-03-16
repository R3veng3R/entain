import { Controller, Get } from '@nestjs/common';
import { MovieService } from '../service/movie.service';
import { Movie } from '../types';

@Controller('/movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getMovies(): Promise<Movie[]> {
    return await this.movieService.getMovieList();
  }
}
