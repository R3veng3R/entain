import { MovieEntity } from '../entity/movie.entity';
import { Movie } from '../types';
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
}
