import React from "react";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import PostInput from "./../elements/PostInput";

const AddComments = () => {
  return (
    <Grid is_flex>
      <PostInput width="450px"></PostInput>
      <Button width="40px" height="40px" margin="10px 30px 0 0">
        작성
      </Button>
    </Grid>
  );
};

export default AddComments;
