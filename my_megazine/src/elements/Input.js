import React from "react";
import styled from "styled-components";
import Grid from "./Grid";
const Input = (props) => {
  return (
    <Grid padding="0 30px">
      <p>{props.children}</p>
      <TextInput />
    </Grid>
  );
};
const TextInput = styled.input`
  border: none;
  border-bottom: 2px solid slateblue;
  outline: none;
  width: 380px;
`;

export default Input;
