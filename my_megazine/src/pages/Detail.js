import React from "react";
import Header from "../components/Header";
import Grid from "../elements/Grid";
import Image from "./../elements/Image";
import Button from "../elements/Button";
import CommentList from "../components/CommentList";
import AddComments from "../components/AddComments";

const Detail = () => {
  return (
    <Grid>
      <Header></Header>
      <Grid
        width="600px"
        border="2px solid slateblue"
        bor_radius
        shadow
        margin="0 auto"
      >
        <Grid is_flex width="600px" margin="0 auto">
          <Grid is_flex>
            <Image
              shape="circle"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png"
              size="36"
            />
            / nickname
          </Grid>
          <Grid is_flex margin="0 10px">
            Time{" "}
            <Button width="35px" height="25px" margin="10px 0 10px 10px">
              수정
            </Button>
          </Grid>
        </Grid>
        <Grid width="600px" margin="0 auto">
          <Grid padding="20px">
            <div>나는 그 날을 잊지 않는다</div>
          </Grid>
          <Image
            shape="rectangle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png"
          />
        </Grid>
        <Grid>
          <AddComments></AddComments>
        </Grid>
        <CommentList>무슨 일이에요? (수근수근)</CommentList>
        <CommentList>무슨 일이에요? (수근수근)</CommentList>
        <CommentList>무슨 일이에요? (수근수근)</CommentList>
        <CommentList>무슨 일이에요? (수근수근)</CommentList>
        <CommentList>무슨 일이에요? (수근수근)</CommentList>
      </Grid>
    </Grid>
  );
};

export default Detail;
