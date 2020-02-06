import React, { FunctionComponent } from "react";

export interface TextInputProps {
  value: string;
}

const TextInput: FunctionComponent<TextInputProps> = ({ value }) => {
  return <input type="text" defaultValue={value} />;
};

const CreateTextInput = (props: TextInputProps) => {
  return <TextInput value={props.value || ""} />;
};

export default CreateTextInput;
