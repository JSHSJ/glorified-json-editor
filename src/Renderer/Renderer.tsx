import React, { useContext, FunctionComponent } from "react";
import { JsonStore } from "../stores/jsonStore";
import KNOWN_INPUTS from "./StandardTypes";
import { FormEvent } from "react";

const Renderer: FunctionComponent = () => {
  const store = useContext(JsonStore);
  const { state } = store;

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
            {json.state.parsed.content.map((el, index) => {
              if (Object.keys(KNOWN_INPUTS).indexOf(el.type) !== -1) {
                return (
                  <label key={el.name} className={el.type}>
                    <span>{el.name}</span>
                    {KNOWN_INPUTS[el.type](el.content)}
                  </label>
                );
              }
            })}
            <input type="submit" value="Generate new JSON" />
          </form>
        </div>
      )}
    </JsonStore.Consumer>
  );
};

export default Renderer;
