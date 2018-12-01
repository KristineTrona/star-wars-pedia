import React from 'react'

const genders =['male', 'female', 'all']

export const MovieDetails = (props) =>{
  return (
    <div id="characters-list">
      <div className="container">
        <div className="dark-overlay">
        <table className="table table-hover text-white">
          <thead>
            <tr>
                <th>Name</th>
                <th>Gender
                  <div className="btn" onClick={props.toggleGenderList}>
                    <i className="fas fa-sort-down"></i>
                  </div>
                  {props.listState === true && 
                  <div className="gender-list">
                    {genders.map((gender) => (
                    <div onClick = {props.filterGender} className="list-item px-3 py-1" key={gender}>{gender}</div>
                      ))}
                    </div>}
                </th>
                <th>Height
                  <div className="btn" onClick={props.sortAscending}>
                    <i className="fas fa-sort-up"></i>
                  </div>
                  <div className="btn" onClick={props.sortDescending}>
                    <i className="fas fa-sort-down"></i>
                  </div>
                </th>
                <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {props.characters && props.characters.map(character => 
              <tr key={character.name}>
                <th>{character.name}</th>
                <td>{character.gender}</td>
                <td>{character.height}</td>
                <td>{character.birthYear}</td>
              </tr>
            )}
          </tbody>
         </table>
         </div>
        </div>
      </div>
  )
}