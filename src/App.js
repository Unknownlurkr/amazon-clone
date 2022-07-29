import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
/**  <Header />
          <Home />*/
//nested Switch for react-router-dom v6 as switch componetn doesnt exsist, no exact needed, order doesnt matter.
function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
        <Route path="/checkout" >
          <Header />
          <Checkout/>
          </Route>
          <Route path="/" >
          <Header />
          <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
