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
          <div>π</div>
          <Grid is_flex>
            <Button margin="0 0 0 10px" fontSize="25px">
              λ΄ μ λ³΄
            </Button>
            <Button margin="0 0 0 10px" fontSize="25px">
              μλ¦Ό
            </Button>
            <Button
              fontSize="25px"
              margin="0 0 0 10px"
              onClick={() => {
                dispatch(userActions.logoutFB());
              }}
            >
              λ‘κ·Έμμ
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid is_flex width="600px" margin="50px auto">
        <div>π</div>
        <Grid is_flex>
          <Button
            margin="0 0 0 10px"
            fontSize="25px"
            onClick={() => {
              history.push("/signup");
            }}
          >
            νμκ°μ
          </Button>
          <Button
            margin="0 0 0 10px"
            fontSize="25px"
            onClick={() => {
              history.push("/login");
            }}
          >
            λ‘κ·ΈμΈ
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
