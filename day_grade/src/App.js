import "./App.css";
import "./style.css";
import React from "react";
import Detail from "./Detail";
import { Route } from "react-router-dom";
import Main from "./Main";

function App() {
  const day = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="App">
      <Route path="/" exact render={(props) => <Main day={day} />} />
      <Route path="/review/:day_name" component={Detail} />
    </div>
  );
}

export default App;
