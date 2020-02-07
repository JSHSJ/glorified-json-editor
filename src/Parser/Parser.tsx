import React, { useContext, useRef, FormEvent, FunctionComponent } from 'react';
import { JsonStore } from '../stores/jsonStore';
import styled from 'styled-components';

const Parse = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin: 10px 0;
  max-width: 640px;

  .textarea {
    margin-bottom: 20px;
    min-height: 300px;
  }
`;

const Parser: FunctionComponent = () => {
  const store = useContext(JsonStore);
  const { dispatch } = store;
  const textarea = useRef<HTMLTextAreaElement>(null);

  const parseJson = (event: FormEvent) => {
    event.preventDefault();
    if (textarea.current === null || dispatch === null) {
      return;
    }
    const json = textarea.current.value;
    const content = JSON.parse(json);
    dispatch({ type: 'update', payload: { parsed: content } });
  };

  return (
    <Parse onSubmit={parseJson}>
      <textarea className="textarea" ref={textarea}></textarea>
      <input type="submit" value="Parse"></input>
    </Parse>
  );
};

export default Parser;
