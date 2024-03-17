import { MovieEntity } from '../entity/movie.entity';
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { MovieRequest } from '../type/movie.request.type';

@Injectable()
export class MovieRepository extends Repository<MovieEntity> {
  constructor(private dataSource: DataSource) {
    super(MovieEntity, dataSource.createEntityManager());
  }

  async findAll(request: MovieRequest) {
    const query = this.dataSource
      .getRepository(MovieEntity)
      .createQueryBuilder('movie')
      .leftJoinAndSelect('movie.genres', 'genre')
      .orderBy('movie.popularity', 'DESC');

    this.applyFilters(query, request);
    return query.getMany();
  }

  private applyFilters(
    query: SelectQueryBuilder<MovieEntity>,
    request: MovieRequest,
  ) {
    const { alias } = query;
    const { title, genreIds } = request;

    if (genreIds?.length) {
      query.andWhere(`genre.id IN (:...genreIds)`, { genreIds });
    }

    if (title) {
      query.andWhere(`LOWER(${alias}.title) LIKE :title`, {
        title: `%${title.toLowerCase()}%`,
      });
    }
  }
}
