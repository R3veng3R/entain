import { useState } from 'react';
import styled from 'styled-components';
import { useMovies } from './hooks/useMovies';
import { MovieFilters } from './types';
import { MoviePoster } from './components/MoviePoster';
import { useGenres } from './hooks/useGenres';
import { GenreFilters } from './components/GenreFilters';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ResponsiveModal } from '../../components/ResponsiveModal';

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

const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const MoviePage = () => {
  const [filters, setFilters] = useState<MovieFilters>();
  const { data: movies } = useMovies(filters);
  const { data: genres } = useGenres();

  return (
    <Page>
      <div style={{ background: 'white', borderRadius: '5px' }}>
        <Input
          placeholder="Search by title"
          addonBefore={<SearchOutlined />}
          onChange={({target}) => {
            setFilters({ ...filters, title: target.value });
          }}
        />
      </div>

      <FilterWrapper>
        <GenreFilters genres={genres} onChange={(genreIds) => {
          setFilters({ ...filters, genreIds });
        }} />
      </FilterWrapper>

      <Content>
        {movies?.map((movie) => (
          <MoviePoster key={movie.id} posterPath={movie.posterPath} />
        ))}
      </Content>

      <ResponsiveModal isOpen={true} />
    </Page>
  );
};
