import TextInput from "./StandardTypes/TextInput";
import NumberInput from "./StandardTypes/NumberInput";
import Repeater from "./StandardTypes/Repeater";
import { FunctionComponent } from "react";

const KNOWN_INPUTS: {
  [key: string]: FunctionComponent<any>;
} = {
  text: TextInput,
  number: NumberInput,
  repeater: Repeater
};

export default KNOWN_INPUTS;
