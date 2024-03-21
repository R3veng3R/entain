import { Injectable } from '@nestjs/common';
import { GenreRepository } from '../repository/genre.repository';
import { GenreEntity } from '../entity/genre.entity';

@Injectable()
export class GenreService {
  constructor(private readonly genreRepository: GenreRepository) {}

  async findAll(): Promise<GenreEntity[]> {
    return this.genreRepository.find({ order: { name: 'ASC' } });
  }
}
