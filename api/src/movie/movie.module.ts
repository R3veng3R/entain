import { Module } from '@nestjs/common';
import { MovieController } from './controller/movie.controller';
import { MovieService } from './service/movie.service';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}