import React from 'react'
import {Link} from 'react-router-dom'


export const MovieDetails = (props) =>{
  return (
    <div id="characters-list">
      <div className="container">
        <div className="dark-overlay">
        <table class="table table-hover text-white">
          <thead>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {props.characters.map(character => 
              <tr>
                <th scope="row">{character.name}</th>
                <td>{character.gender}</td>
                <td>{character.height}</td>
                <td>{character.birth_year}</td>
              </tr>
            )}
          </tbody>
         </table>
         </div>
        </div>
      </div>
  )
}


    {/* <div id="movies-list">
      <div className="container">
        <div className="row">
          {props.characters.map(character => 
            <div className="card m-3 col-lg-2 col-md-4 col-sm-6" key={character.name}>
              <h5 className="card-title">{character.name}</h5>             
            </div>)}
        </div>
      </div> */}


      {/* <nav>
        <ul class="pagination">
            <li class="page-item disabled">
                <Link to="" className="page-link">
                    <span>&laquo;</span>
                    <span class="sr-only"></span>
                </Link>
            </li>
            <li class="page-item active">
                <Link to="" className="page-link">1</Link>
            </li>
            <li class="page-item">
                <Link to="" className="page-link">2</Link>
            </li>
            <li class="page-item">
                <Link to="" className="page-link">3</Link>
            </li>
            <li class="page-item">
                <Link to="" className="page-link">
                    <span>&raquo;</span>
                    <span class="sr-only">Next</span>
                </Link>
            </li>
        </ul>
        </nav> */}