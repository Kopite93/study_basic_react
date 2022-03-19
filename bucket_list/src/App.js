import React from "react";
import logo from "./logo.svg";
import "./style.css";
import BucketList from "./BucketList";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };
  }

  render() {
    return (
      <div className="App">
        <MyStyled>
          <p>I'm studying.</p>
        </MyStyled>
        {/* <div className="container">
          <h1>내 버킷리스트</h1>
          <hr className="line"/>
          <BucketList list_a={this.state.list} />
        </div> */}
      </div>
    );
  }
}

const MyStyled = styled.div`
  width: 50vw;
  height: 150px;
  background-color: ${(props) => (props.bg_color ? "lightgray" : "skyblue")};
  p {
    color: #fff;
  }
  &:hover {
    background-color: lightgray;
  }
`;

export default App;
