import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DB_NAME, HOST, PASSWORD, PORT, USERNAME } from './datasource';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export default registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: HOST,
    port: PORT,
    username: USERNAME,
    password: PASSWORD,
    database: DB_NAME,
    autoLoadEntities: true,
    synchronize: false,
    namingStrategy: new SnakeNamingStrategy(),
  }),
);
