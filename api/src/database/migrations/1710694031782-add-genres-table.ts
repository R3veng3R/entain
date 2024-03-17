import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddGenresTable1710694031782 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE genre (
            id    INTEGER PRIMARY KEY,
            name  VARCHAR(100)
        )
    `);

    await queryRunner.query(`
        CREATE TABLE movie_genres (
            movie_id INTEGER NOT NULL,
            genre_id INTEGER NOT NULL,
            constraint fk_movie_id foreign key (movie_id) REFERENCES movie (id),
            constraint fk_genre_id foreign key (genre_id) REFERENCES genre (id)
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    throw new Error('rollback is unsupported');
  }
}
