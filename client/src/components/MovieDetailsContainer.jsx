import React, {Component} from 'react'
import {connect} from 'react-redux'
import Pagination from "react-js-pagination";
import {getMovieDetails, sortHeight} from '../actions/movies'
import {MovieDetails} from './MovieDetails'


class MovieDetailsContainer extends Component{

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }
 
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  componentDidMount(){
    this.props.getMovieDetails(parseInt(this.props.match.params.id))
  }

  sortAscending = () => {
    this.props.sortHeight(this.props.selectedMovie.sort((a,b) => {
      return a.height-b.height
    }))
  }

  sortDescending = () => {
    this.props.sortHeight(this.props.selectedMovie.sort((a,b) => {
      return b.height-a.height
    }))
  }

  render(){

    return (
      <div>
        <MovieDetails characters={this.props.selectedMovie}
        sortAscending={this.sortAscending} sortDescending={this.sortDescending}/>
        <Pagination
          innerClass="pagination justify-content-center"
          itemClass="page-item"
          linkClass="page-link"
          hideFirstLastPages
          activePage={this.state.activePage}
          itemsCountPerPage={30}
          totalItemsCount={this.props.selectedMovie.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
   selectedMovie: state.selectedMovie
  }
}
  
const mapDispatchToProps = {
  getMovieDetails,
  sortHeight
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer)