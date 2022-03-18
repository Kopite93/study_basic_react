import logo from "./logo.svg";
import "./App.css";

function App() {
  const styles = {
    border: "1px solid gray",
    padding: "20px",
    margin: "30px auto",
    width: "200px",
  };

  return (
    <div className="App">
      <div style={styles}>
        <h1 style={{ color: "skyblue" }}>안녕하세요!</h1>
        <hr />
        <p style={{ textAlign: "left" }}>이름을 입력해주세요.</p>
        <input type="text" />
      </div>
    </div>
  );
}

export default App;
