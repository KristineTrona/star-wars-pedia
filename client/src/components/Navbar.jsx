import React from 'react'
import logo from '../assets/star-wars-logo.png'
import { Link} from 'react-router-dom'


export default function Navbar () {
  return(
    <nav className="navbar navbar-expand-md navbar-dark fixed-top p-3" >
      <Link to="/movies"><img className= "img-fluid logo" src={logo} alt="star wars logo"/></Link>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto mr-5">
          <li className="nav-item dropdown mr-3">
            <Link to="/movies" className="nav-link dropdown-toggle" data-toggle="dropdown" 
            data-target="#movies-dropdown">Movies</Link>
              <div className="dropdown-menu text-white" id="movies-dropdown">
                <Link to="/movies/1?page=1" className="dropdown-item">The Phantom Menace</Link>
                <Link to="/movies/2?page=1" className="dropdown-item">Attack of the Clones</Link>
                <Link to="/movies/3?page=1" className="dropdown-item">Revenge of the Sith</Link>
                <Link to="/movies/4?page=1" className="dropdown-item">A New Hope</Link>
                <Link to="/movies/5?page=1" className="dropdown-item">The Empire Strikes Back</Link>
                <Link to="/movies/6?page=1" className="dropdown-item">Return of the Jedi</Link>
                <Link to="/movies/7?page=1" className="dropdown-item">The Force Awakens</Link>
              </div>
          </li>
          <li className="nav-item dropdown">
            <Link to="/planets" className="nav-link dropdown-toggle" data-toggle="dropdown" 
            data-target="#planets-dropdown">Climates</Link>
            <div className="dropdown-menu text-white" id="planets-dropdown">
              <Link to="/planets/?climate=1" className="dropdown-item">Arid</Link>
              <Link to="/planets/?climate=2" className="dropdown-item">Artic</Link>
              <Link to="/planets/?climate=3" className="dropdown-item">Artificial temperate</Link>
              <Link to="/planets/?climate=4" className="dropdown-item">Frigid</Link>
              <Link to="/planets/?climate=5" className="dropdown-item">Frozen</Link>
              <Link to="/planets/?climate=6" className="dropdown-item">Hot</Link>
              <Link to="/planets/?climate=7" className="dropdown-item">Humid</Link>
              <Link to="/planets/?climate=8" className="dropdown-item">Murky</Link>
              <Link to="/planets/?climate=9" className="dropdown-item">Polluted</Link>
              <Link to="/planets/?climate=10" className="dropdown-item">Rocky</Link>
              <Link to="/planets/?climate=11" className="dropdown-item">Subartic</Link>
              <Link to="/planets/?climate=12" className="dropdown-item">Superheated</Link>
              <Link to="/planets/?climate=13" className="dropdown-item">Temperate</Link>
              <Link to="/planets/?climate=14" className="dropdown-item">Tropical</Link>
              <Link to="/planets/?climate=15" className="dropdown-item">Windy</Link>
              <Link to="/planets/?climate=16" className="dropdown-item">Unknown</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
