import React, { FunctionComponent, ReactElement } from "react";
import KNOWN_INPUTS from "../StandardTypes";
import { ContentNodeType } from "../../stores/jsonStore";
import styled from "styled-components";

export interface RepeaterProps {
  content: ContentNodeType[];
}

const Repeat = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin: 10px 0;
`;

const Repeater: FunctionComponent<RepeaterProps> = ({ content }) => {
  return (
    <>
      {content.map(el => {
        if (Object.keys(KNOWN_INPUTS).indexOf(el.type) !== -1) {
          return (
            <Repeat key={el.name}>
              <label className={el.type}>
                <span>{el.name}</span>
                {KNOWN_INPUTS[el.type](el.content)}
              </label>
            </Repeat>
          );
        } else {
          return <></>;
        }
      })}
    </>
  );
};

const CreateRepeater = (props: ContentNodeType[]) => {
  return <Repeater content={props} />;
};

export default CreateRepeater;
