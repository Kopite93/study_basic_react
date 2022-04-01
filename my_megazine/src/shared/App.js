import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import Login from "../pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact component={Login} />
      </BrowserRouter>
    </>
  );
}

export default App;
