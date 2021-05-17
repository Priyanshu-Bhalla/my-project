import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MainPage from './pages/MainPage';
import {
  BrowserRouter as Router,
   Route,
    Switch,
     Link, 
     Redirect
    } from 'react-router-dom';
import Popularity from './pages/Popularity';
class App extends Component {
  render(){
    return(
      <Router>
        <Route exact path="/Popularity" component={Popularity}/>
      </Router>
    )
  };


}

export default App;