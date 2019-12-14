import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

ReactDOM.render(
    <App />,
    document.getElementById('basic-react-app')
);