import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { CssBreakpoint } from '../../../enum/CssBreakpoint';
import { FormInput } from './FormInput';

const Form = styled.form`
  display: flex;
  gap: 5px;

  @media screen and (max-width: ${CssBreakpoint.Sm}) {
    display: block;

    .input {
      margin-bottom: 5px;
    }

    button {
      margin-top: 5px;
      width: 100%;
    }
  }
`;

export type FormValues = {
  title: string;
  overview: string;
};

interface Props {
  onSubmit: (data: FormValues) => void;
}

export const SearchForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      title: '',
      overview: '',
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormInput control={control} name="title" />
      <FormInput control={control} name="overview" />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
