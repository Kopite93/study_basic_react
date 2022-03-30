import React, { useEffect } from "react";
import styled from "styled-components";
import Home from "./Home";
import AddDic from "./AddDic";
import UpdateDic from "./UdateDic";
import { Route, useHistory } from "react-router-dom";


function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Container>
        <h1
          onClick={() => {
            history.push("/");
          }}
        >
          영어 단어장
        </h1>
        <Line />
        <Route path="/" exact component={Home} />
        <Route path="/addDic" exact component={AddDic} />
        <Route path="/updateDic/:id" exact component={UpdateDic} />
      </Container>
    </div>
  );
}

const Container = styled.div`
  // border: 1px solid black;
  height: 100vw;
  width: 100vw;
  max-width: 100%;
  background-attachment: fixed;
  h1 {
    color: slateblue;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Line = styled.hr`
  border: 1px solid slateblue;
  width: 98vw;
`;
export default App;
