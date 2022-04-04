import React from "react";
import Header from "../components/Header";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Image from "./../elements/Image";
import Input from "./../elements/Input";
import PostInput from "./../elements/PostInput";

const AddPost = () => {
  return (
    <>
      <Grid>
        <Header></Header>
        <Grid
          width="600px"
          margin="50px auto"
          border="2px solid slateblue"
          bor_radius="10px"
        >
          <Grid padding="0 30px">
            <h2>게시글 작성</h2>
          </Grid>
          <Input type="file"></Input>
          <Image
            shape="rectangle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png"
            margin="20px 0"
          ></Image>
          <Grid margin="20px auto">
            <PostInput type="textarea" height="200px" width="520px">
              게시글 내용
            </PostInput>
            <Button width="540px" margin="10px auto">
              작성하기
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AddPost;
