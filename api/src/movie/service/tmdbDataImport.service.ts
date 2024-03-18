import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import * as process from 'process';
import * as initialData from '../../database/initial-data.json';
import { HttpService } from '@nestjs/axios';
import { MovieRepository } from '../repository/movie.repository';
import { MovieMapper } from '../mapper/movie.mapper';
import { TmdbMovieResponse } from '../type/tmdbMovieResponse.type';
import { GenreRepository } from '../repository/genre.repository';
import { MovieEntity } from '../entity/movie.entity';

@Injectable()
export class TmdbDataImportService implements OnApplicationBootstrap {
  constructor(
    private readonly httpService: HttpService,
    private readonly movieRepository: MovieRepository,
    private readonly movieGenreRepository: GenreRepository,
    private readonly movieMapper: MovieMapper,
  ) {}

  async onApplicationBootstrap(): Promise<void> {
    const movieCount = await this.movieRepository.count();
    if (movieCount > 0) {
      console.log('Movie DB is not empty skipping data import');
      return;
    }
    await this.importData();
  }

  private async importData(): Promise<void> {
    const apiKey = process.env.TMDB_API_KEY;
    console.log('Movie DB import started');
    for (const data of initialData) {
      try {
        const { data: response } =
          await this.httpService.axiosRef.get<TmdbMovieResponse>(
            `https://api.themoviedb.org/3/movie/${data.id}?api_key=${apiKey}`,
          );

        const genres = response.genres?.length
          ? await this.movieGenreRepository.save(response.genres)
          : [];

        const entity: MovieEntity = this.movieMapper.mapToEntity(
          response,
          genres,
        );
        await this.movieRepository.save(entity);
      } catch (e) {
        console.error(`Error importing data with id: ${data.id}, skipping`, e);
      }
    }
    console.log('Movie DB import ended');
  }
}
