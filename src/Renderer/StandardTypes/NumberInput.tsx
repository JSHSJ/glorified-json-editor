import React, { FunctionComponent } from 'react';

export interface NumberInputProps {
  name: string;
  value: number;
  currentNode: string[];
}

const NumberInput: FunctionComponent<NumberInputProps> = ({ name, value, currentNode }) => {
  const flattenedNode = currentNode.join('_');
  return (
    <label key={flattenedNode} className="label-number">
      <span>{flattenedNode}</span>
      <input type="number" defaultValue={value} />
    </label>
  );
};

export default NumberInput;
