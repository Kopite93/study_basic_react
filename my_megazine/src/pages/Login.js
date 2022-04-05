import React, { useState } from "react";
import styled from "styled-components";
import Button from "../elements/Button";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configStore";
import Input from "../elements/Input";

const Login = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const login = () => {
    if (id === "" || pw === "") {
      window.alert("아이디 혹은 비빌번호를 입력해주세요");
      return;
    }

    dispatch(userActions.logInFB(id, pw));
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
          type="passWord"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        >
          비밀번호
        </Input>
        <Button
          width="400px"
          margin="70px auto"
          fontSize="35px"
          onClick={() => {
            login();
          }}
        >
          로그인
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
  // height: 400px;
  margin: 200px auto;
  box-shadow: 5px 5px 5px gray;
`;

const Title = styled.p`
  text-align: center;
  margin-bottom: 30px;
  font-size: 30px;
  color: slateblue;
`;

export default Login;
