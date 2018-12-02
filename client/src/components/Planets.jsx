import React, {Component} from 'react'
import {DarkHairedCharacters} from './CharactersModal'

export class Planets extends Component{

  state={
    selectedPlanet: null
  }

  selectPlanet = (planetId) => {
    this.setState({selectedPlanet: planetId})
  }

  render(){
    return (
      <div id="planets-list">
        <div className="container">
          <div className="row">
          {this.props.planets.map(planet =>
              <div className="my-4 col-lg-3 col-md-4" key={planet.id}>
                <div className="card">
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      {planet.name}
                    </h3>
                    <button className="btn btn-info" onClick={() => this.selectPlanet(planet.id)} 
                      data-toggle="modal" data-target="#charactersListModal">
                      See characters
                    </button>
                  </div>
                </div>
              </div>)} 
          </div>
        </div>
          
        {/* Modal that gets opened by clicking the "See Characters" button */}

        <DarkHairedCharacters planets = {this.props.planets} selectedPlanet={this.props.planets
          .find(planet => planet.id === this.state.selectedPlanet)}/>
          
      </div>
    )
  }
}
