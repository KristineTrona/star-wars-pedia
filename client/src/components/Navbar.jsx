import React from 'react'
import logo from '../assets/star-wars-logo.png'
import { Link} from 'react-router-dom'


export default function Navbar () {
  return(
    <nav className="navbar navbar-expand-md navbar-dark p-3" >
      <img className= "img-fluid logo" src={logo} alt="star wars logo"/>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto mr-5">
          <li className="nav-item">
            <Link to="/movies" className="nav-link">Movies</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
