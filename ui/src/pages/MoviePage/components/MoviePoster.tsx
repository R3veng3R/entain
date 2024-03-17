const IMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500';

interface Props {
  posterPath: string;
}

export const MoviePoster = ({ posterPath }: Props) => {
  return (
    <img src={`${IMDB_IMAGE_BASE_PATH}${posterPath}`} alt='' style={{ width: '185px' }} />
  );
};