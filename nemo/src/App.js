import React from "react";
import Nemo from "./Nemo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
    };
  }

  componentDidMount() {}

  addNemo = () => {
    this.setState({ count: this.state.count + 1 });
  };

  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      window.alert("네모가 없어요");
    }
  };

  render() {
    const nemo_count = Array.from({ length: this.state.count }, (v, i) => i);
    return (
      <div className="App">
        <Nemo />
        {nemo_count.map((n, i) => {
          return (
            <div
              key={i}
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#dddddd",
                margin: "10px",
              }}
            >
              nemo
            </div>
          );
        })}

        <div>
          <button onClick={this.addNemo}>하나추가</button>
          <button onClick={this.removeNemo}>하나빼기</button>
        </div>
      </div>
    );
  }
}

export default App;
