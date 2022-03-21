import { Route, Link, Switch } from "react-router-dom";
import Cat from "./Cat";
import Home from "./Home";
import Dog from "./Dog";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home으로 가기</Link>
        <Link to="/cat">Cat으로 가기</Link>
        <Link to="/dog">Dog로 가기</Link>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cat" component={Cat}>
          {/* <Cat /> */}
        </Route>
        <Route path="/dog">
          <Dog />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
