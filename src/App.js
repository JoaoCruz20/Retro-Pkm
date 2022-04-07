import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../src/pages/home";

function App() {
  return (

    <Router>
      <Switch>
        <Route caseSensitive={false} path="/" exact component={<Home />}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
