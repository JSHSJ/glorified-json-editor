import React, { useContext, FunctionComponent } from 'react';
import { JsonStore } from '../stores/jsonStore';
import Renderer from './Renderer';
import { FormEvent } from 'react';

const RendererForm: FunctionComponent = () => {
  const formToJson = (event: FormEvent) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <JsonStore.Consumer>
      {json => (
        <div className="Renderer">
          <h2>{json.state.parsed.title}</h2>
          <form onSubmit={formToJson}>
            {json.state.parsed && <Renderer content={json.state.parsed} />}
            <input type="submit" value="Generate new JSON" />
          </form>
        </div>
      )}
    </JsonStore.Consumer>
  );
};

export default RendererForm;
