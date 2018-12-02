import React, {Component} from 'react'
import {connect} from 'react-redux'
import queryString from 'query-string'
import {Planets} from './Planets'
import {getPlanets} from '../actions/planets'

class PlanetsContainer extends Component{

  values = queryString.parse(this.props.location.search)

  componentDidMount(){
    this.props.getPlanets(this.values.climate)
  }

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