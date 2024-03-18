import { MovieEntity } from '../entity/movie.entity';
import { Injectable } from '@nestjs/common';
import { Movie } from '../type/movie.type';
import { TmdbMovieResponse } from '../type/tmdbMovieResponse.type';
import { GenreEntity } from '../entity/genre.entity';

@Injectable()
export class MovieMapper {
  public mapToResponses(movieEntities: MovieEntity[]) {
    return movieEntities.map((entity) => this.mapToResponse(entity));
  }

  public mapToResponse(movieEntity: MovieEntity): Movie {
    return {
      id: movieEntity.id,
      title: movieEntity.title,
      originalTitle: movieEntity.originalTitle,
      overview: movieEntity.overview,
      posterPath: movieEntity.posterPath,
      genres: movieEntity.genres?.map((genre) => genre.name) || [],
    };
  }

  public mapToEntity(
    response: TmdbMovieResponse,
    genres: GenreEntity[],
  ): MovieEntity {
    return {
      genres,
      adult: response.adult,
      originalTitle: response.original_title,
      overview: response.overview,
      popularity: response.popularity,
      posterPath: response.poster_path,
      title: response.title,
      tmdbId: response.id,
      voteAverage: response.vote_average,
    };
  }
}
