import React, { useState, useEffect } from "react";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import { history } from "../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "../shared/Firebase";


const Header = () => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  console.log(_session_key);
  console.log(is_session);
  console.log(document.cookie);
  if (is_login && is_session) {
    return (
      <>
        <Grid is_flex width="600px" margin="50px auto" >
          <div>🌍</div>
          <Grid is_flex>
            <Button margin="0 0 0 10px" fontSize="25px">
              내 정보
            </Button>
            <Button margin="0 0 0 10px" fontSize="25px">
              알림
            </Button>
            <Button
              fontSize="25px"
              margin="0 0 0 10px"
              onClick={() => {
                dispatch(userActions.logoutFB());
              }}
            >
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid is_flex width="600px" margin="50px auto">
        <div>🌍</div>
        <Grid is_flex>
          <Button
            margin="0 0 0 10px"
            fontSize="25px"
            onClick={() => {
              history.push("/signup");
            }}
          >
            회원가입
          </Button>
          <Button
            margin="0 0 0 10px"
            fontSize="25px"
            onClick={() => {
              history.push("/login");
            }}
          >
            로그인
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
