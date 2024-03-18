import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { GenreEntity } from '../entity/genre.entity';

@Injectable()
export class GenreRepository extends Repository<GenreEntity> {
  constructor(private dataSource: DataSource) {
    super(GenreEntity, dataSource.createEntityManager());
  }
}
