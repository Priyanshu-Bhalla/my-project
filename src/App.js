import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPage from "./pages/MainPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Popularity from "./pages/Popularity";
import Nav from "./components/Nav";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Route exact path="/Popularity" component={Popularity} />
        </Router>
      </div>
    );
  }
}

export default App;
