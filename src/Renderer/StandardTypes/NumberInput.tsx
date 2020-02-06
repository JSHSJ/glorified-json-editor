import React, { FunctionComponent } from "react";

export interface NumberInputProps {
  value: number;
}

const NumberInput: FunctionComponent<NumberInputProps> = ({ value }) => {
  return <input type="number" defaultValue={value} />;
};

const CreateNumberInput = (props: NumberInputProps) => {
  return <NumberInput value={props.value} />;
};

export default CreateNumberInput;
