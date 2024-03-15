import { MigrationInterface, QueryRunner } from 'typeorm';
import * as initialData from './initial-data/initial-data.json';

export class InsertInitialData1710536891252 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const data of initialData) {
      await queryRunner.query(`
        INSERT INTO movies(external_id, adult, title, original_title, overview, poster_path, vote_average) 
        VALUES (${data.id}, ${data.adult}, '${data.title}', '${data.original_title}', '${data.overview}', '${data.poster_path}', '${data.vote_average}')`);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    throw new Error('rollback is unsupported');
  }

}
