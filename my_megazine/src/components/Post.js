import React from "react";
import Grid from "../elements/Grid";

const Post = (props) => {
  return (
    <>
      <Grid>
        <div>user img / nickname / Time / btn</div>
        <div>contents</div>
        <div>image</div>
        <div>review count</div>
      </Grid>
    </>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "world",
    user_profile:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  imagte_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  contents: "와...리액트...",
  postTime: "2022-04-01 10:00:00",
  review_count: "5",
};

export default Post;
