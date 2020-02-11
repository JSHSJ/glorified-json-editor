import React, { FunctionComponent } from 'react';
import KNOWN_INPUTS from './StandardTypes';
import { ComponentType } from '../stores/jsonStore';
import Repeater from './Repeater';

import { CreateCustomInput } from './CustomTypes/CustomComponent';

interface RendererProps {
  content: ComponentType;
  currentNode?: string[];
}

const Renderer: FunctionComponent<RendererProps> = ({ content, currentNode = [] }) => {
  return (
    <div className="renderer">
      {Object.keys(content).map((entry: string) => {
        const value = content[entry];
        const type = typeof value;
        const nextNode = [...currentNode, entry];
        if (Array.isArray(value)) {
          console.log(' ARRAY ', entry, value);
          return (
            <Repeater name={entry} content={value as [ComponentType]} currentNode={nextNode} />
          );
        } else {
          if (type === 'object') {
            return (
              <div key={entry}>
                <h3>{entry}</h3>
                <Renderer content={value} currentNode={nextNode} />
              </div>
            );
          } else {
            if (Object.keys(KNOWN_INPUTS).indexOf(type) !== -1) {
              return <div key={entry}>{KNOWN_INPUTS[type](entry, value, nextNode)}</div>;
            }
          }
        }
      })}
    </div>
  );
};

export default Renderer;
