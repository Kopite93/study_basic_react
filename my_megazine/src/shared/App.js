import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </BrowserRouter>
    </>
  );
}

export default App;
