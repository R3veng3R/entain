import { MovieEntity } from '../entity/movie.entity';
import { MovieMapper } from './movie.mapper';
import { testMovieEntity1, testMovieEntity2 } from '../../TestObjects';

describe('MovieMapper test cases', () => {
  const movieMapper: MovieMapper = new MovieMapper();

  it('should map an array of entities', () => {
    // Given
    const entities: MovieEntity[] = [testMovieEntity1, testMovieEntity2];

    // When
    const responses = movieMapper.mapToResponses(entities);

    // Then
    expect(responses).toHaveLength(2);
    expect(responses[0].id).toEqual(1);
    expect(responses[0].originalTitle).toEqual('test original title');
    expect(responses[0].title).toEqual('test title');
    expect(responses[0].overview).toEqual('test overview');
    expect(responses[0].posterPath).toEqual('/posterPath.jpg');
    expect(responses[0].genres).toHaveLength(1);

    expect(responses[1].id).toEqual(2);
    expect(responses[1].originalTitle).toEqual('test original title 2');
    expect(responses[1].title).toEqual('test title 2');
    expect(responses[1].overview).toEqual('test overview 2');
    expect(responses[1].posterPath).toEqual('/posterPath2.jpg');
    expect(responses[1].genres).not.toBeUndefined();
    expect(responses[1].genres).toHaveLength(0);
  });
});
