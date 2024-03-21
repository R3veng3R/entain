import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'genre' })
export class GenreEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
