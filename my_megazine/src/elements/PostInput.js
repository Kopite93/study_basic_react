import React from "react";
import styled from "styled-components";
import Grid from "./Grid";
const PostInput = (props) => {
  const styles = {
    height: props.height,
    width: props.width,
  };
  return (
    <Grid padding="0 30px">
      <p>{props.children}</p>
      <TextInput onChange={props.onChange} {...styles} />
    </Grid>
  );
};

PostInput.defaultProps = {
  height: false,
  width: "520px",
};

const TextInput = styled.textarea`
  border: 1px solid slateblue;
  font-size: 1.1em;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  width: ${(props) => props.width};
  resize: none;
  ${(props) => (props.height ? `height: ${props.height};` : "")}
`;

export default PostInput;
