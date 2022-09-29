import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../src/pages/home";
import Pokedex from './pages/pokedex';
import Login from './pages/login';
import Games from './pages/games';
import AboutMe from './pages/about-me';
import Express from './pages/express';

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
        <Route caseSensitive={false} path="/login" exact component={<Login />}>
          <Login/>
        </Route>
        <Route caseSensitive={false} path="/games" exact component={<Games />}>
          <Games/>
        </Route>
        <Route caseSensitive={false} path="/about-me" exact component={<AboutMe />}>
          <AboutMe/>
        </Route>
        <Route caseSensitive={false} path="/express-test" exact component={<Express />}>
          <Express/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
