import styled from 'styled-components';
import { CssBreakpoint } from '../../../enum/CssBreakpoint';

export const IMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500';

const Img = styled.img`
  width: 200px;
  cursor: pointer;
  transition: all .25s ease-in-out;
  box-shadow: 3px 1px 8px #000000;
  border-radius: 5px;
  
  &:hover {
    transform: scale(1.25);
  }

  @media screen and (max-width: ${CssBreakpoint.Sm}) {
    width: 65%;
  }
`;

interface Props {
  posterPath: string | null;
  onClick: () => void;
}

export const MoviePoster = ({ posterPath, onClick }: Props) => {
  if (posterPath === null) {
    return (
      <div  style={{ width: '200px' }}>No Data</div>
    )
  }

  return (
    <Img src={`${IMDB_IMAGE_BASE_PATH}${posterPath}`} alt='' onClick={onClick} />
  );
};