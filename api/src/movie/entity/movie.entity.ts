import {
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GenreEntity } from './genre.entity';

@Entity({ name: 'movie' })
export class MovieEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  tmdbId: number;

  @Column()
  adult: boolean;

  @Column()
  title: string;

  @Column()
  originalTitle: string;

  @Column()
  overview: string;

  @Column()
  posterPath: string;

  @Column()
  voteAverage: number;

  @Column()
  popularity: number;

  @ManyToMany(() => GenreEntity)
  @JoinTable({
    name: 'movie_genres',
    joinColumn: {
      name: 'movie_id',
    },
    inverseJoinColumn: {
      name: 'genre_id',
    },
  })
  genres?: GenreEntity[];
}
