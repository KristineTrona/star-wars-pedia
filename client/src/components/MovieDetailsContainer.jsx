import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMovieDetails} from '../actions/movies'
import {MovieDetails} from './MovieDetails'

class MovieDetailsContainer extends Component{

  componentDidMount(){
    this.props.getMovieDetails(parseInt(this.props.match.params.id))
  }


  render(){

    return (
      <MovieDetails characters={this.props.selectedMovie}/>
    )
  }

}

const mapStateToProps = (state) => {
  return {
   selectedMovie: state.selectedMovie,
   people: state.people
  }
}
  
const mapDispatchToProps = {
  getMovieDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer)