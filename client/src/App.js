import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import Navbar from './components/Navbar'
import MoviesContainer from './components/MoviesContainer'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={MoviesContainer}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
