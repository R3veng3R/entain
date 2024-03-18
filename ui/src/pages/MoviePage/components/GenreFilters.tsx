import { Genre } from '../types';
import { Checkbox } from 'antd';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  .ant-checkbox-wrapper,
  .ant-checkbox-group {
    color: white;
  }
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
    <>
      <Label>Genres:</Label>
      <CheckboxWrapper>
        <Checkbox.Group
          options={options || []}
          onChange={onChange}
        />
      </CheckboxWrapper>
    </>
  );
};