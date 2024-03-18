import styled from 'styled-components';
import { CssBreakpoint } from '../../../enum/CssBreakpoint';

const IMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500';

const Img = styled.img`
  width: 200px;
  cursor: pointer;
  transition: all .25s ease-in-out;
  box-shadow: 3px 1px 8px #000000;
  
  &:hover {
    transform: scale(1.25);
  }

  @media screen and (max-width: ${CssBreakpoint.Sm}) {
    width: 65%;
  }
`;

interface Props {
  posterPath: string | null;
}

export const MoviePoster = ({ posterPath }: Props) => {
  if (posterPath === null) {
    return (
      <div  style={{ width: '185px' }} />
    )
  }

  return (
    <Img src={`${IMDB_IMAGE_BASE_PATH}${posterPath}`} alt='' />
  );
};