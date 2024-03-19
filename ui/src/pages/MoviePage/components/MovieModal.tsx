import { ResponsiveModal } from '../../../components/ResponsiveModal';
import { Movie } from '../types';
import styled from 'styled-components';
import { IMDB_IMAGE_BASE_PATH } from './MoviePoster';
import { CloseOutlined } from '@ant-design/icons';
import { CssBreakpoint } from '../../../enum/CssBreakpoint';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  height: inherit;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;

  @media screen and (max-width: ${CssBreakpoint.Lg}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img {
      width: 75%;
      margin-bottom: 20px;
    }
  }
`;

const CloseIcon = styled(CloseOutlined)`
  font-size: 1.8rem;
  color: #24508d;
  cursor: pointer;

  &:hover {
    color: #060d17;
  }
`;

interface Props {
  movie: Movie;
  onClose: () => void;
}

export const MovieModal = ({ movie, onClose }: Props) => {
  return (
    <ResponsiveModal
      isOpen={true}
      onBackgroundClick={onClose}
    >
      <Header>
        <CloseIcon onClick={onClose} />
      </Header>
      <Content>
        <img src={`${IMDB_IMAGE_BASE_PATH}${movie.posterPath}`} alt='' style={{ marginRight: '10px' }} />
        <div>{movie.overview}</div>
      </Content>
    </ResponsiveModal>
  )
}