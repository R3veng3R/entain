import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import * as process from 'process';
import * as initialData from '../../database/initial-data.json';
import { HttpService } from '@nestjs/axios';
import { MovieRepository } from '../repository/movie.repository';
import { MovieMapper } from '../mapper/movie.mapper';
import { TmdbMovieResponse } from '../type/tmdbMovieResponse.type';
import { GenreRepository } from '../repository/genre.repository';
import { MovieEntity } from '../entity/movie.entity';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TmdbDataImportService implements OnApplicationBootstrap {
  private readonly logger = new Logger(TmdbDataImportService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly movieRepository: MovieRepository,
    private readonly movieGenreRepository: GenreRepository,
    private readonly movieMapper: MovieMapper,
  ) {}

  async onApplicationBootstrap(): Promise<void> {
    const movieCount = await this.movieRepository.count();
    if (movieCount > 0) {
      this.logger.log('Movie DB is not empty skipping data import...');
      return;
    }

    this.logger.log('Movie DB import started...');
    await this.importData(process.env.TMDB_API_KEY);
    const importedCount = await this.movieRepository.count();
    this.logger.log(`Number of movies imported: ${importedCount}`);
    this.logger.log('Movie DB import ended...');
  }

  async importData(apiKey: string): Promise<void> {
    for (const data of initialData) {
      try {
        const { data: response } = await firstValueFrom(
          this.httpService.get<TmdbMovieResponse>(
            `https://api.themoviedb.org/3/movie/${data.id}?api_key=${apiKey}`,
          ),
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
        this.logger.error(
          `Error importing data with id: ${data.id}, skipping`,
          e,
        );
      }
    }
  }
}
