import { MovieRepository } from '../repository/movie.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { MovieMapper } from '../mapper/movie.mapper';
import { createMock } from '@golevelup/ts-jest';
import { TmdbDataImportService } from './tmdbDataImport.service';
import { HttpService } from '@nestjs/axios';
import { GenreRepository } from '../repository/genre.repository';
import { testTmdbMovieResponse } from '../../testObjects';
import { of } from 'rxjs';
import { BadRequestException } from '@nestjs/common';

describe('TmdbDataServiceImport test suit', () => {
  let service: TmdbDataImportService;
  let movieRepository: MovieRepository;
  let genreRepository: GenreRepository;

  const mockHttpService = {
    post: jest.fn(),
    get: jest.fn(),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        TmdbDataImportService,
        MovieMapper,
        { provide: HttpService, useValue: mockHttpService },
        { provide: MovieRepository, useFactory: createMock },
        { provide: GenreRepository, useFactory: createMock },
      ],
    }).compile();

    service = app.get(TmdbDataImportService);
    movieRepository = app.get(MovieRepository);
    genreRepository = app.get(GenreRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should import data without errors', async () => {
    // Given
    jest
      .spyOn(mockHttpService, 'get')
      .mockReturnValue(of({ data: testTmdbMovieResponse }));

    // When
    await service.importData('testApiKey');

    // Then
    expect(mockHttpService.get).toHaveBeenCalledTimes(50);
    expect(genreRepository.save).toHaveBeenCalledTimes(50);
    expect(movieRepository.save).toHaveBeenCalledTimes(50);
  });

  it('Should continue saving even if error', async () => {
    // Given
    jest
      .spyOn(mockHttpService, 'get')
      .mockImplementationOnce(() => {
        throw new BadRequestException();
      })
      .mockReturnValue(of({ data: testTmdbMovieResponse }));

    // When
    await service.importData('testApiKey');

    // Then
    expect(mockHttpService.get).toHaveBeenCalledTimes(50);
    expect(genreRepository.save).toHaveBeenCalledTimes(49);
    expect(movieRepository.save).toHaveBeenCalledTimes(49);
  });
});
