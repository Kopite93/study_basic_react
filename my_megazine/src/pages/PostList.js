import React from "react";
import Post from "../components/Post";
import Header from "../components/Header";
import Plus from "../elements/Plus";
import Permit from "../shared/Permit";
import { history } from "../redux/configStore";
import Grid from "../elements/Grid";


const PostList = () => {
  return (
    <Grid>
      <Header />
      <Post />
      <Permit>
        <Plus
          onClick={() => {
            history.push("/addPost");
          }}
        />
      </Permit>
    </Grid>
  );
};

export default PostList;
