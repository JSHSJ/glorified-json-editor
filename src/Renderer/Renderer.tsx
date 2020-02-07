import React, { FunctionComponent } from 'react';
import KNOWN_INPUTS from './StandardTypes';
import { ComponentType } from '../stores/jsonStore';
import Repeater from './Repeater';

interface RendererProps {
  content: ComponentType;
}

const Renderer: FunctionComponent<RendererProps> = ({ content }) => {
  return (
    <div>
      {Object.keys(content).map((entry: string) => {
        const value = content[entry];
        const type = typeof value;
        if (Array.isArray(value)) {
          return <Repeater name={entry} content={value as [ComponentType]} />;
        } else {
          if (type === 'object') {
            if (Object.keys(KNOWN_INPUTS).indexOf(value.__type) !== -1) {
              return (
                <label key={entry} className={value.__type}>
                  <span>{entry}</span>
                  {KNOWN_INPUTS[value.__type](value)}
                </label>
              );
            }
          } else {
            if (Object.keys(KNOWN_INPUTS).indexOf(type) !== -1) {
              return (
                <label key={entry} className={type}>
                  <span>{entry}</span>
                  {KNOWN_INPUTS[type](value)}
                </label>
              );
            }
          }
        }
      })}
    </div>
  );
};

export default Renderer;
