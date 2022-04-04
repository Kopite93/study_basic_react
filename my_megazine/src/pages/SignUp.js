import React, { useState } from "react";
import styled from "styled-components";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [nickName, setNickName] = useState("");

  const signUp = () => {
    if (pw !== pwCheck) {
      return;
    }
    if (id === "" || pw === "" || nickName === "") {
      return;
    }
    dispatch(userActions.singUpFB(id, pw, nickName));
  };
  return (
    <>
      {/* <Header /> */}
      <Box>
        <Title
          onClick={() => {
            history.push("/");
          }}
        >
          My World
        </Title>
        <Input
          onChange={(e) => {
            setId(e.target.value);
          }}
        >
          아이디
        </Input>
        <Input
          onChange={(e) => {
            setNickName(e.target.value);
          }}
        >
          닉네임
        </Input>
        <Input
          onChange={(e) => {
            setPw(e.target.value);
          }}
        >
          비밀번호
        </Input>
        <Input
          onChange={(e) => {
            setPwCheck(e.target.value);
          }}
        >
          비밀번호 확인
        </Input>
        <Button width="400px" margin="70px auto" onClick={signUp}>
          가입하기
        </Button>
      </Box>
    </>
  );
};

const Box = styled.div`
  box-sizing: border-box;
  border: 2px solid slateblue;
  border-radius: 20px;
  width: 440px;
  height: 550px;
  margin: 200px auto;
  box-shadow: 5px 5px 5px gray;
`;

const Title = styled.p`
  text-align: center;
  margin-bottom: 30px;
  font-size: 30px;
  color: slateblue;
`;

export default SignUp;
