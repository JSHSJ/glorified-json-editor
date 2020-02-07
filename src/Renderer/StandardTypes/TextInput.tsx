import React, { FunctionComponent } from 'react';

export interface TextInputProps {
  value: string;
}

const TextInput: FunctionComponent<TextInputProps> = ({ value }) => {
  return <input type="text" defaultValue={value} />;
};

const CreateTextInput = (props: string) => {
  return <TextInput value={props} />;
};

export default CreateTextInput;
