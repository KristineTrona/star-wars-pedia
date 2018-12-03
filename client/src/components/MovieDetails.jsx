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
                <th>
                  <div className="gender-table-heading">
                    <div>Gender</div>

                    {/* On click toggles the genderList */}

                    <button className="filter" onClick={props.toggleGenderList}>
                      <i className="fas fa-sort-down"></i>
                    </button>
                  </div>

                  {/* If the list is open, shows all gender filters and the gender that is clicked is set as a filter */}

                  {props.listState === true && 
                  <div className="gender-list">
                    {genders.map((gender) => (
                      <div onClick = {() => {props.filterGender(gender); props.toggleGenderList()}} className="btn list-item px-3 py-1" key={gender}>{
                        gender}
                      </div>))}
                  </div>}
                </th>

                {/* Clicking on the specific icon calls sortCharacters function with the appropriate parameters */}

                <th>
                  <div className="height-table-heading">
                    <div>Height</div>
                    <div className="height-sort-buttons">
                      <button className="sort-up" onClick={() => props.sortCharacters("height", "asc")}>
                        <i className="fas fa-sort-up"></i>
                      </button>
                      <button className="sort-down" onClick={() => props.sortCharacters("height", "desc")}>
                        <i className="fas fa-sort-down"></i>
                      </button>
                    </div>
                  </div>
                </th>
                
                <th>
                  <div className="age-table-heading">
                    <div>Birth Year</div>
                    <div className="age-sort-buttons">
                      <button className="sort-up" onClick={() => props.sortCharacters("age", "asc")}>
                        <i className="fas fa-sort-up"></i>
                      </button>
                      <button className="sort-down" onClick={() => props.sortCharacters("age", "desc")}>
                        <i className="fas fa-sort-down"></i>
                      </button>
                    </div>
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