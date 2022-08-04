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
    <div className="App">
    <Header />
      <Router>
        <Switch>
          <Route path="/checkout">
            
            <Checkout />
          </Route>
          <Route path="/">
            
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
