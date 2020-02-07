import React, { FunctionComponent } from 'react';

type CustomInputProps = {
  __type: string;
  content: {
    headline: 'string';
    name: 'string';
    amount: 'number';
  };
};

const NumberInput: FunctionComponent<CustomInputProps> = ({ __type, content }) => {
  return <input type="number" defaultValue={value} />;
};

const CreateNumberInput = (props: number) => {
  return <NumberInput value={props} />;
};

export default CreateNumberInput;
