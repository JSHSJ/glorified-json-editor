import React, { FunctionComponent } from 'react';
import Renderer from '../Renderer';
import { ComponentType } from '../../stores/jsonStore';

export interface CustomInputProps {
  __type: string;
  content: ComponentType;
}

export type CustomInputType = FunctionComponent<CustomInputProps>;

export interface CustomInputFunction {
  (props: CustomInputProps): CustomInputType;
}

export const CustomInput: CustomInputType = ({ __type, content }) => {
  return (
    <div className="__type">
      {Object.keys(content).map(component => (
        <p>{component}</p>
      ))}
    </div>
  );
};

export const CreateCustomInput = (props: CustomInputProps) => {
  return <CustomInput __type={props.__type} content={props.content} />;
};

export default CreateCustomInput;
