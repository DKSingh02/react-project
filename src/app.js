import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navs from "./navs/navs";
import Items from "./add-items/items";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Navs />
        <div>
          <Switch>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/items">
              <Items />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function Details() {
  return <h2>Details</h2>;
}

export default App;
