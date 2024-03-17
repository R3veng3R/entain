import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../../components/Input';
import { useMovies } from './hooks/useMovies';
import { MovieFilters } from './types';
import { MoviePoster } from './components/MoviePoster';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
  gap: 30px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const MoviePage = () => {
  const [filters, setFilters] = useState<MovieFilters>();
  const { data: movies } = useMovies(filters);

  return (
    <Page>
      <FilterWrapper>
        <Input
          placeholder="Search by title"
          onChange={(value) => {
            setFilters({ ...filters, title: value });
          }}
        />
      </FilterWrapper>
      <Content>
        {movies?.map((movie) => (
          <MoviePoster posterPath={movie.posterPath} />
        ))}
      </Content>
    </Page>
  );
};
