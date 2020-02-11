import TextInput from './StandardTypes/TextInput';
import NumberInput from './StandardTypes/NumberInput';
import { FunctionComponent } from 'react';
import React from 'react';

const KNOWN_INPUTS: {
  [key: string]: Function;
} = {
  string: (name: string, value: string, currentNode: string[]) => (
    <TextInput name={name} value={value} currentNode={currentNode} />
  ),
  number: (name: string, value: number, currentNode: string[]) => (
    <NumberInput name={name} value={value} currentNode={currentNode} />
  ),
};

export default KNOWN_INPUTS;
