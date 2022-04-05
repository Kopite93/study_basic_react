import React, { useEffect } from "react";
import Post from "../components/Post";
import Header from "../components/Header";
import Plus from "../elements/Plus";
import Permit from "../shared/Permit";
import { history } from "../redux/configStore";
import Grid from "../elements/Grid";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "./../redux/modules/post";

const PostList = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  console.log(post_list);

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);
  return (
    <Grid>
      <Header />
      {post_list.map((cur, idx) => {
        return <Post key={cur.id} {...cur} />;
      })}
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
