import { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  outline: none;
`;

interface Props {
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Input = ({ onChange, placeholder }: Props) => {
  const [inputValue, setInputValue] = useState<string>();
  return (
    <StyledInput
      style={{ width: '100%' }}
      value={inputValue}
      placeholder={placeholder}
      onChange={({ target }) => {
        setInputValue(target.value);
        onChange(target.value);
      }}
    />
  );
};
