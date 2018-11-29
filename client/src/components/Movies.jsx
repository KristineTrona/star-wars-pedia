import React from 'react'
import {Link} from 'react-router-dom'
import episode4 from '../assets/new-hope.jpg'
import episode6 from '../assets/return-of-the-jedi.jpg'
import episode3 from '../assets/revenge-of-the-sith.jpeg'
import episode5 from '../assets/the-empire-strikes-back.jpg'
import episode7 from '../assets/the-force-awakens.jpg'
import episode1 from '../assets/the-phantom-menace.jpg'
import episode2 from '../assets/attack-of-the-clones.jpg'
import starWarsRandom from '../assets/star-wars-general.png'


const findImage = (episodeId) =>{
  switch(episodeId){
    case (1):
    return episode1
    case(2):
    return episode2
    case(3): 
    return episode3
    case(4):
    return episode4
    case(5):
    return episode5
    case(6):
    return episode6
    case(7):
    return episode7
    default:
    return starWarsRandom
  }
}

export const Movies = (props) =>{
  return (
    <div id="movies-list">
      <div className="container">
        <div className="row">
          {props.movies.map(movie =>
            <Link to={`/movies/${movie.episode_id}`} className="my-4 col-lg-4 col-md-6" style={{textDecoration: "none", color: "inherit"}} key={movie.episode_id}>
              <div className="card">
              <img src={findImage(movie.episode_id)} alt="star-wars-poster" className="img-fluid card-image-top"/>
                <div className="card-body text-center">
                  <h3 className="card-title">
                    {movie.title}
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
