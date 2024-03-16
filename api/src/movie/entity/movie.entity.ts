import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'movie' })
export class MovieEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  externalId: number;

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
}
