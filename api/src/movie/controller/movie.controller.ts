import { Controller, Get, Query } from '@nestjs/common';
import { MovieService } from '../service/movie.service';
import { MovieRequest } from '../type/movieRequest.type';
import { Movie } from '../type/movie.type';
import { GenreEntity } from '../entity/genre.entity';
import { GenreService } from '../service/genre.service';

@Controller('/movie')
export class MovieController {
  constructor(
    private readonly movieService: MovieService,
    private readonly genreService: GenreService,
  ) {}

  @Get()
  async getMovies(@Query() request: MovieRequest): Promise<Movie[]> {
    return await this.movieService.getMovieList(request);
  }

  @Get('/genre')
  async getGenres(): Promise<GenreEntity[]> {
    return await this.genreService.findAll();
  }
}
