import { DataSource } from 'typeorm';
import * as process from 'process';

export const HOST = process.env.DB_HOST || 'localhost';
export const PORT = parseInt(process.env.DB_PORT) || 5432;
export const USERNAME = process.env.DB_USERNAME || 'postgres';
export const PASSWORD = process.env.DB_PASSWORD || 'postgres';
export const DB_NAME = process.env.DB_NAME || 'movie_db';

export default new DataSource({
  type: 'postgres',
  host: HOST,
  port: PORT,
  username: USERNAME,
  password: PASSWORD,
  database: DB_NAME,
  synchronize: false,
  logging: false,
  entities: [],
  migrations: ['src/database/migrations/*.ts'],
});
