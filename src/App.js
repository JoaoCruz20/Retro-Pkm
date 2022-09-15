import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../src/pages/home";
import Pokedex from './pages/pokedex';

function App() {
  return (

    <Router>
      <Switch>
        <Route caseSensitive={false} path="/" exact component={<Home />}>
          <Home />
        </Route>
        <Route caseSensitive={false} path="/pokedex" exact component={<Pokedex />}>
          <Pokedex/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
