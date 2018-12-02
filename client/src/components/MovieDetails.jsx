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
                    <div onClick = {() => {props.filterGender(gender); props.toggleGenderList()}} className="btn list-item px-3 py-1" key={gender}>{gender}</div>
                      ))}
                    </div>}
                </th>
                <th>Height
                  <div className="btn" onClick={() => props.sortCharacters("height", "asc")}>
                    <i className="fas fa-sort-up"></i>
                  </div>
                  <div className="btn" onClick={() => props.sortCharacters("height", "desc")}>
                    <i className="fas fa-sort-down"></i>
                  </div>
                </th>
                <th>Birth Year
                <div className="btn" onClick={() => props.sortCharacters("age", "asc")}>
                    <i className="fas fa-sort-up"></i>
                  </div>
                  <div className="btn" onClick={() => props.sortCharacters("age", "desc")}>
                    <i className="fas fa-sort-down"></i>
                  </div>
                </th>
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