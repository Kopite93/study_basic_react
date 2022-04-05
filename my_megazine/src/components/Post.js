import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Button from "../elements/Button";
import { history } from "../redux/configStore";
import user from "../redux/modules/user";

const Post = (props) => {
  const { comment_cnt, contents, id, image_url, insert_dt, user_info } = props;

  return (
    <>
      <Grid
        width="600px"
        border="2px solid slateblue"
        bor_radius
        shadow
        margin="50px auto"
      >
        <Grid is_flex width="600px" margin="0 auto">
          <Grid is_flex>
            <Image shape="circle" src={user_info.user_profile} size="36" />/{" "}
            {user_info.nickname}
          </Grid>
          <Grid is_flex margin="0 10px">
            {insert_dt}
            <Button width="35px" height="25px" margin="10px 0 10px 10px">
              수정
            </Button>
          </Grid>
        </Grid>
        <Grid width="600px" margin="0 auto">
          <Grid padding="20px">
            <div>{contents}</div>
          </Grid>
          <Image shape="rectangle" src={image_url} />
        </Grid>
        <Grid margin="10px" padding="10px">
          <div>댓글 {comment_cnt}개</div>
        </Grid>
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
