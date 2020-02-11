import React, { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';
import { ComponentType } from '../stores/jsonStore';
import Renderer from './Renderer';
import newId from '../utils/newid';
import KNOWN_INPUTS from './StandardTypes';

export interface RepeaterProps {
  name: string;
  content: [ComponentType];
  currentNode: string[];
}

const Repeat = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin: 10px 0;
`;

const Repeater: FunctionComponent<RepeaterProps> = ({ name, content, currentNode }) => {
  const flattenedNode = currentNode.join('_');

  return (
    <Repeat>
      <h3>{flattenedNode}</h3>
      {content.map((el: ComponentType) => {
        return (
          <Renderer
            content={el}
            key={newId(`${flattenedNode + '-' + name}-`)}
            currentNode={currentNode}
          />
        );
      })}
    </Repeat>
  );
};

export default Repeater;
