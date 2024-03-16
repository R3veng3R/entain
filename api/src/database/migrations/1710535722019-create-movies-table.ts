import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMoviesTable1710535722019 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE movie
        (
            id             SERIAL PRIMARY KEY,
            external_id    INTEGER NOT NULL,
            adult          BOOLEAN DEFAULT false,
            title          VARCHAR(150),
            original_title VARCHAR(150),
            overview       TEXT,
            poster_path    VARCHAR(100),
            vote_average   NUMERIC
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    throw new Error('rollback is unsupported');
  }
}
