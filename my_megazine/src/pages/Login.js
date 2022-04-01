import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <>
      {/* <Header /> */}
      <Box>
        <Title
          onClick={() => {
            history.push('/');
          }}
        >
          My megazine
        </Title>
        <Input>아이디</Input>
        <Input>비밀번호</Input>
        <Button width="400px" margin="70px auto">
          Login
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
