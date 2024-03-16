import { MovieEntity } from '../entity/movie.entity';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieRepository extends Repository<MovieEntity> {
  constructor(private dataSource: DataSource) {
    super(MovieEntity, dataSource.createEntityManager());
  }

  async findAll() {
    return this.dataSource
      .getRepository(MovieEntity)
      .createQueryBuilder('movie')
      .getMany();
  }
}
