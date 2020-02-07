import React, { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';
import { ComponentType } from '../stores/jsonStore';
import Renderer from './Renderer';
import newId from '../utils/newid';

export interface RepeaterProps {
  name: string;
  content: [ComponentType];
}

const Repeat = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin: 10px 0;
`;

const Repeater: FunctionComponent<RepeaterProps> = ({ name, content }) => {
  console.log(name, content);
  return (
    <Repeat>
      <h3>{name}</h3>
      {content.map(el => {
        return <Renderer content={el} key={newId(`${name}-`)} />;
      })}
    </Repeat>
  );
};

export default Repeater;
