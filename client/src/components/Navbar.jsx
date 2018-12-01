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
          <li className="nav-item dropdown">
            <Link to="/movies" className="nav-link dropdown-toggle" data-toggle="dropdown">Movies</Link>
              <div className="dropdown-menu text-white">
                <Link to="/movies/1?page=1" className="dropdown-item">The Phantom Menace</Link>
                <Link to="/movies/2?page=1" className="dropdown-item">Attack of the Clones</Link>
                <Link to="/movies/3?page=1" className="dropdown-item">Revenge of the Sith</Link>
                <Link to="/movies/4?page=1" className="dropdown-item">A New Hope</Link>
                <Link to="/movies/5?page=1" className="dropdown-item">The Empire Strikes Back</Link>
                <Link to="/movies/6?page=1" className="dropdown-item">Return of the Jedi</Link>
                <Link to="/movies/7?page=1" className="dropdown-item">The Force Awakens</Link>
              </div>
          </li>
          <li className="nav-item">
            <Link to="/planets" className="nav-link">Planets</Link>
          </li>
          <li className="nav-item">
            <Link to="/quiz" className="nav-link">Quiz</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
