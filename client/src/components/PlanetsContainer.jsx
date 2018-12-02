import React, {Component} from 'react'
import {connect} from 'react-redux'
import queryString from 'query-string'
import {Planets} from './Planets'
import {getPlanets} from '../actions/planets'

class PlanetsContainer extends Component{


  // sets the values variable equal to an object containing all query information:

  values = queryString.parse(this.props.location.search)

  // Once the component is mounted calls a getPlanets action which sends a get reuqest to 
  // the API and return all planets with the specified climate:

  componentDidMount(){
    this.props.getPlanets(this.values.climate)
  }

  // If a different climate is selected the values variable is updated and getPlanets 
  // action is called with the new climate parameter

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      let values = queryString.parse(this.props.location.search)
      this.props.getPlanets(values.climate)
    }
  }


  render(){
    return (
      <Planets planets={this.props.planets}/>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    planets: state.planets
  }
}
  
const mapDispatchToProps = {
  getPlanets
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsContainer)