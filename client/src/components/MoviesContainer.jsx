import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Movies} from './Movies'

class MoviesContainer extends Component{


  render(){
    return (
      <Movies/>
    )
  }

}

const mapStateToProps = (state) => {
  return {
   movies: state.movies
  }
}
  
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)