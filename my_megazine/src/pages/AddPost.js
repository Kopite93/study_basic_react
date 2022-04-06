import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Image from "./../elements/Image";
import Input from "./../elements/Input";
import PostInput from "./../elements/PostInput";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "./../redux/modules/post";
import { storage } from "../shared/Firebase";
import { actionCreators as imageActions } from "../redux/modules/image";

const AddPost = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const is_uploading = useSelector((state) => state.image.uploading);
  const preview = useSelector((state) => state.image.preview);
  console.log(preview);
  const fileInput = useRef();
  const [contents, setContents] = useState();
  const dispatch = useDispatch();
  console.log(contents);

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const selectFile = (e) => {
    console.log(e.target.files[0]);
    console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const addFB = () => {
    dispatch(postActions.addPostFB(contents));
  };

  const uploadFB = () => {
    let image = fileInput.current?.files[0];
    if (!fileInput.current || fileInput.current.files.length === 0) {
      window.alert("파일을 선택해주세요!");
      return;
    }
    //옵셔널체이닝
    console.log(image.name);
    dispatch(imageActions.uploadImageFB(image));
    dispatch(postActions.addPostFB(contents));
  };

  if (!is_login) {
    return (
      <Grid width="600px" margin="0 auto">
        <Header></Header>
        <div>로그인하고 글 쓰셈</div>
      </Grid>
    );
  }

  return (
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
        <Input
          type="file"
          onChange={selectFile}
          ref={fileInput}
          disabled={is_uploading}
        ></Input>
        <Image
          shape="rectangle"
          src={
            preview
              ? preview
              : "data:image/jpeg;base64,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"
          }
          margin="20px 0"
        ></Image>
        <Grid margin="20px auto">
          <PostInput
            type="textarea"
            height="200px"
            width="520px"
            onChange={changeContents}
          >
            게시글 내용
          </PostInput>
          <Button width="540px" margin="10px auto" onClick={uploadFB}>
            작성하기
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddPost;
