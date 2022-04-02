import React, { useRef } from "react";
import styled from "styled-components";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { setCookie, getCookie, deleteCookie } from "./../shared/Cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();
  const idInput = useRef(null);
  const pwInput = useRef(null);

  const login = () => {
    dispatch(userActions.loginAction({ user_id: "world" }));
  };
  return (
    <>
      {/* <Header /> */}
      <Box>
        <Title onClick={() => {}}>My World</Title>
        <Input ref={idInput}>아이디</Input>
        <Input ref={pwInput}>비밀번호</Input>
        <Button
          width="400px"
          margin="70px auto"
          fontSize='35px'
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
  height: 400px;
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
