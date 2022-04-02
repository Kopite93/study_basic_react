import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Button from "../elements/Button";

const Post = (props) => {
  return (
    <>
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
          <Grid is_flex margin='0 10px'>
            Time{" "}
            <Button width="35px" height="25px" margin="10px 0 10px 10px">
              수정
            </Button>
          </Grid>
        </Grid>
        <Grid width="600px" margin="0 auto">
          <div>contents</div>
          <Image
            shape="rectangle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png"
          />
        </Grid>
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
