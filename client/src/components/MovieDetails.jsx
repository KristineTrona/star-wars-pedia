import React from 'react'
// import {Link} from 'react-router-dom'


export const MovieDetails = (props) =>{
  return (
    <div id="movies-list">
      <div className="container">
        <div className="row">
          {props.characters.map(character => character.name)}
        </div>
      </div>
    </div>
  )
}
