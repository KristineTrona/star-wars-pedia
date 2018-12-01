import React from 'react'
import {Link} from 'react-router-dom'


export const Movies = (props) =>{
  return (
    <div id="movies-list">
      <div className="container">
        <div className="row">
          {props.movies.map(movie =>
            <Link to={`/movies/${movie.id}?page=1&orderBy=name&order=asc&gender=all`} className="my-4 col-lg-4 col-md-6" style={{textDecoration: "none", color: "inherit"}} key={movie.id}>
              <div className="card">
              <img src={movie.imageURL} alt="star-wars-poster" className="img-fluid card-image-top"/>
                <div className="card-body text-center">
                  <h3 className="card-title">
                    {movie.name}
                  </h3>
                  <button className="btn btn-info btn-lg">See all characters</button>
                </div>
              </div>
            </Link>)} 
        </div>
      </div>
    </div>
  )
}
