import React, { FunctionComponent } from 'react';

export interface TextInputProps {
  name: string;
  value: string;
  currentNode: string[];
}

const TextInput: FunctionComponent<TextInputProps> = ({ name, value, currentNode }) => {
  // return <input type="text" defaultValue={value} />;
  const flattenedNode = currentNode.join('_');
  return (
    <label key={flattenedNode} className="label-text">
      <span>{flattenedNode}</span>
      <input type="text" defaultValue={value} />
    </label>
  );
};

export default TextInput;
