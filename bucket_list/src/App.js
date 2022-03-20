import React from "react";
import logo from "./logo.svg";
import BucketList from "./BucketList";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.text);
  }

  render() {
    return (
      <div className="App">
        {/* <MyStyled>
          <p>I'm studying.</p>
        </MyStyled> */}

        <Container>
          <Title>내 버킷리스트</Title>
          <Line />
          <BucketList list_a={this.state.list} />
        </Container>

        <div>
          <input
            type="text"
            ref={this.text}
            onChange={() => {
              console.log(this.text.current.value);
            }}
          />
        </div>
      </div>
    );
  }
}

// const MyStyled = styled.div`
//   width: 50vw;
//   height: 150px;
//   background-color: ${(props) => (props.bg_color ? "lightgray" : "skyblue")};
//   p {
//     color: #fff;
//   }
//   &:hover {
//     background-color: lightgray;
//   }
// `;

const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  height: 80vh;
  margin: auto;
  padding: 16px;
`;

const Title = styled.h1`
  color: skyblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
`;

export default App;
