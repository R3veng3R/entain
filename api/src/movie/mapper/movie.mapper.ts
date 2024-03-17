import { MovieEntity } from '../entity/movie.entity';
import { Movie, TmdbMovieResponse } from '../types';
import { Injectable } from '@nestjs/common';

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
    };
  }

  public mapToEntity(response: TmdbMovieResponse): MovieEntity {
    return {
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
