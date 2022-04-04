import React from "react";
import styled from "styled-components";

const Plus = (props) => {
  return <PlusBtn onClick={props.onClick}>+</PlusBtn>;
};

const PlusBtn = styled.button`
  border: none;
  border-radius: 100%;
  font-size: 3em;
  color: #ffffff;
  background-color: slateblue;
  width: 60px;
  height: 60px;
  position: fixed;
  right: 900px;
  bottom: 50px;
  &: hover {
    cursor: pointer;
    transform: rotate(90deg);
  }
  transition: transform 300ms ease-in-out;
`;

export default Plus;
