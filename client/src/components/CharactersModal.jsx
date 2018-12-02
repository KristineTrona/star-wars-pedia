import React from 'react'

export const DarkHairedCharacters = (props) =>{
  return (

  // Modal with dark haired characters list:

    <div className="modal" id="charactersListModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Dark haired characters:</h5>
            <button className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">

            {/* If there are any dark haired characters on the selected planet list them: */}
          
            {props.selectedPlanet && props.selectedPlanet.characters.length >0 && 
              <ul> {props.selectedPlanet.characters.map(character => 
                <li key={character.id}>{character.name}</li>)}
              </ul>
            }

            {/* If there are no haired characters on the selected planet return this: */}

            {props.selectedPlanet && props.selectedPlanet.characters.length === 0 &&
              <p>There are no dark haired characters on this planet</p>
            }
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
