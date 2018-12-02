import React from 'react'
import {Link} from 'react-router-dom'


export const Planets = (props) =>{
  return (
    <div id="planets-list">
      <div className="container">
        <div className="row">
        {props.planets.map(planet =>
            <Link to={`/movies/${planet.id}`} className="my-4 col-lg-3 col-md-4" style={{textDecoration: "none", color: "inherit"}} key={planet.id}>
              <div className="card">
                <div className="card-body text-center">
                  <h3 className="card-title">
                    {planet.name}
                  </h3>
                  <button className="btn btn-info">See characters</button>
                </div>
              </div>
            </Link>)} 
        </div>
      </div>
    </div>
  )
}
