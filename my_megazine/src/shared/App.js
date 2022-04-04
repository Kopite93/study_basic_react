import "./App.css";
import React, { useEffect } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configStore";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddPost from "../pages/AddPost";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { apiKey } from "../shared/Firebase";
import Detail from "../pages/Detail";

function App() {
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/addPost" exact component={AddPost} />
        <Route path="/detail" exact component={Detail} />
      </ConnectedRouter>
    </>
  );
}

export default App;
