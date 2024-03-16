import { MovieService } from './movie.service';
import { TestingModule, Test } from '@nestjs/testing';
import { MovieMapper } from '../mapper/movie.mapper';
import { MovieRepository } from '../repository/movie.repository';
import { createMock } from '@golevelup/ts-jest';
import { MovieEntity } from '../entity/movie.entity';
import { testMovieEntity1 } from '../../TestObjects';

describe('MovieService test suit', () => {
  let movieService: MovieService;
  let movieRepository: MovieRepository;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        MovieService,
        MovieMapper,
        { provide: MovieRepository, useFactory: createMock },
      ],
    }).compile();

    movieService = app.get(MovieService);
    movieRepository = app.get(MovieRepository);
  });

  it('should get a list f movies', async () => {
    // Given
    const movieEntities: MovieEntity[] = [testMovieEntity1, testMovieEntity1];
    const movieRepositoryFindAllMethod = jest
      .spyOn(movieRepository, 'findAll')
      .mockResolvedValueOnce(movieEntities);

    // When
    const movies = await movieService.getMovieList();

    // Then
    expect(movieRepositoryFindAllMethod).toHaveBeenCalled();
    expect(movies).toHaveLength(2);
  });
});
