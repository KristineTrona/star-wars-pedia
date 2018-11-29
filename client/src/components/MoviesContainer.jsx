import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Movies} from './Movies'
import {getMovies} from '../actions/movies'

class MoviesContainer extends Component{

  componentDidMount(){
    this.props.getMovies()
  }


  render(){

    return (
      <Movies movies={this.props.movies}/>
    )
  }

}

const mapStateToProps = (state) => {
  return {
   movies: state.movies
  }
}
  
const mapDispatchToProps = {
  getMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)