import { useState } from 'react';
import styled from 'styled-components';
import { GenreFilters } from './components/GenreFilters';
import { MovieModal } from './components/MovieModal';
import { MoviePoster } from './components/MoviePoster';
import { FormValues, SearchForm } from './components/SearchForm';
import { useGenres } from './hooks/useGenres';
import { useMovies } from './hooks/useMovies';
import { Movie, MovieFilters } from './types';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const Content = styled.div`
  gap: 10px 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MoviePage = () => {
  const [filters, setFilters] = useState<MovieFilters>();
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const { data: movies } = useMovies(filters);
  const { data: genres } = useGenres();

  const onSubmit = (data: FormValues) => {
    setFilters({
      ...filters,
      title: data.title === '' ? undefined : data.title,
      overview: data.overview === '' ? undefined : data.overview,
    });
  };

  return (
    <Page>
      <SearchForm onSubmit={onSubmit} />
      <GenreFilters genres={genres} onChange={(genreIds) => setFilters({ ...filters, genreIds })} />

      <Content>
        {movies?.map((movie) => (
          <MoviePoster key={movie.id} posterPath={movie.posterPath} onClick={() => setSelectedMovie(movie)} />
        ))}
      </Content>

      {selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(undefined)} />}
    </Page>
  );
};
