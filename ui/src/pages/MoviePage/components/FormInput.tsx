import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useController, UseControllerProps } from 'react-hook-form';
import styled from 'styled-components';
import { theme } from '../../../theme/color-theme';
import type { FormValues } from './SearchForm';

const StyledInput = styled(Input)`
  background: ${theme.colors.white};
  border-radius: 5px;
`;

export const FormInput = (props: UseControllerProps<FormValues>) => {
  const { field } = useController(props);
  return (
    <StyledInput
      {...field}
      className="input"
      maxLength={100}
      placeholder={`Search by ${field.name}`}
      addonBefore={<SearchOutlined />}
    />
  );
};
