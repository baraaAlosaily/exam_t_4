import React, { Component } from 'react'
import './App.css';
import { Switch } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import List from './components/List';
import Header from './components/Header';
export class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/list'>
            <List />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App

