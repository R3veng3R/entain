import { Checkbox } from 'antd';
import styled from 'styled-components';
import { theme } from '../../../theme/color-theme';
import { Genre } from '../types';

const CheckboxWrapper = styled.div`
  .ant-checkbox-wrapper,
  .ant-checkbox-group {
    color: ${theme.colors.white};
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Label = styled.div`
  margin-right: 5px;
`;

interface Props {
  genres: Genre[] | undefined;
  onChange: (values: number[]) => void;
}

export const GenreFilters = ({ genres, onChange }: Props) => {
  const options = genres?.map((genre) => ({
    label: genre.name,
    value: genre.id,
  }));
  return (
    <Container>
      <Label>Genres:</Label>
      <CheckboxWrapper>
        <Checkbox.Group options={options || []} onChange={onChange} />
      </CheckboxWrapper>
    </Container>
  );
};
