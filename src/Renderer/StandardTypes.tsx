import TextInput from './StandardTypes/TextInput';
import NumberInput from './StandardTypes/NumberInput';
import { FunctionComponent } from 'react';

const KNOWN_INPUTS: {
  [key: string]: FunctionComponent<any>;
} = {
  string: TextInput,
  number: NumberInput,
};

export default KNOWN_INPUTS;
