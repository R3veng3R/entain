import { Module } from '@nestjs/common';
import { MovieController } from './controller/movie.controller';
import { MovieService } from './service/movie.service';
import { MovieRepository } from './repository/movie.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './entity/movie.entity';
import { MovieMapper } from './mapper/movie.mapper';
import { HttpModule } from '@nestjs/axios';
import { TmdbDataImportService } from './service/tmdbDataImport.service';
import { GenreEntity } from './entity/genre.entity';
import { GenreRepository } from './repository/genre.repository';
import { GenreService } from './service/genre.service';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity, GenreEntity]), HttpModule],
  controllers: [MovieController],
  providers: [
    MovieService,
    GenreService,
    TmdbDataImportService,
    MovieRepository,
    GenreRepository,
    MovieMapper,
  ],
})
export class MovieModule {}
