import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Button from "../elements/Button";
import styled from "styled-components";

const CommentList = (props) => {
  return (
    <Grid is_flex>
      <Grid is_flex>
        <Image
          shape="circle"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png"
          size="36"
        ></Image>
        <p>kop</p>
      </Grid>
      <Text>{props.children}</Text>
      <Grid>
        <Button width="40px" height="25px" margin="0 10px">
          삭제
        </Button>
      </Grid>
    </Grid>
  );
};

const Text = styled.p`
  // border: 1px solid black;
  word-break: break-all;
  width: 400px;
`;

export default CommentList;
