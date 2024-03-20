import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { ResponsiveModal } from '../../../components/ResponsiveModal';
import { CssBreakpoint } from '../../../enum/CssBreakpoint';
import { theme } from '../../../theme/color-theme';
import { Movie } from '../types';
import { IMDB_IMAGE_BASE_PATH } from './MoviePoster';

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
  justify-content: center;
  border-top: 1px solid ${theme.colors.grey};
  border-bottom: 1px solid ${theme.colors.grey};
  padding: 10px 20px;

  img {
    margin-right: 10px;
    border-radius: 5px;
  }

  @media screen and (max-width: ${CssBreakpoint.Xl}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;

    img {
      width: 75%;
      margin-bottom: 20px;
    }
  }
`;

const CloseIcon = styled(CloseOutlined)`
  font-size: 1.8rem;
  color: ${theme.colors.darkBlue[5]};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.darkBlue[8]};
  }
`;

interface Props {
  movie: Movie;
  onClose: () => void;
}

export const MovieModal = ({ movie, onClose }: Props) => {
  return (
    <ResponsiveModal isOpen={true} onBackgroundClick={onClose}>
      <Header>
        <CloseIcon onClick={onClose} />
      </Header>
      <Content>
        <img src={`${IMDB_IMAGE_BASE_PATH}${movie.posterPath}`} alt="" />
        <div>
          <div style={{ color: theme.colors.neutral[8] }}>GENRES:</div>
          <div style={{ color: theme.colors.neutral[8] }}>
            {movie.genres.length > 0 && movie.genres.sort().join(', ')}
          </div>
          <br />
          <div style={{ color: theme.colors.neutral[8] }}>OVERVIEW:</div>
          <div>{movie.overview}</div>
        </div>
      </Content>
    </ResponsiveModal>
  );
};
