// store.js
import React, { createContext, useReducer, Dispatch } from "react";

export type ContentNodeType = {
  type: string;
  content: any;
  name: string;
};

type StateType = {
  parsed: {
    title: string;
    content: ContentNodeType[];
  };
};

const initialState: StateType = {
  parsed: {
    title: "Default",
    content: []
  }
};

export interface Action {
  type: string;
  payload: StateType;
}

interface ContextProps {
  state: StateType;
  dispatch: Dispatch<Action>;
}

function reducer(state: StateType, action: Action): StateType {
  console.log(action);
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };
    default:
      throw new Error("Can't parse Json");
  }
}
export const JsonStore = createContext({ state: initialState } as ContextProps);

export const JsonProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <JsonStore.Provider value={value}>{children}</JsonStore.Provider>;
};
