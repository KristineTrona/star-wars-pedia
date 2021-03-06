import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import Navbar from './components/Navbar'
import MoviesContainer from './components/MoviesContainer'
import Footer from './components/Footer'
import MovieDetailsContainer from './components/MovieDetailsContainer'
import PlanetsContainer from './components/PlanetsContainer'
import starsVideo from './assets/stars-background.mp4'

class App extends Component {
  render() {
    return (
      <div className="App">
        <video id="background-video" loop autoPlay>
          <source src={starsVideo} type="video/mp4"></source>
            Your browser does not support the video tag.
        </video>
        <Navbar/>
        <Route exact path="/" component={MoviesContainer}/>
        <Route exact path="/movies" component={MoviesContainer}/>
        <Route exact path="/movies/:id" component={MovieDetailsContainer}/>
        <Route exact path="/planets" component={PlanetsContainer}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
