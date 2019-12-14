import React, { Component } from "react";
import "./navs.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Navs extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="tabHeading">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/items">Items</Link>
              </li>
              <li>
                <Link to="/details">Details</Link>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Navs;
