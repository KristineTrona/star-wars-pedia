import React, {Component} from 'react'
import {connect} from 'react-redux'
import queryString from 'query-string'
import Pagination from './Pagination'
import {getCharacterList} from '../actions/characters'
import {MovieDetails} from './MovieDetails'


class MovieDetailsContainer extends Component{

  state={
    listOpen: false
  }

  // sets the values variable equal to an object containing all query information:

  values = queryString.parse(this.props.location.search)

  // When the components is mounted a getCharacterList action is called, which sends a get request to the API
  // with all specified query values:

  componentDidMount(){
    this.props.getCharacterList(parseInt(this.props.match.params.id), this.values.page, 
      this.values.gender, this.values.orderBy, this.values.order)
  }

  // If a different movie is selected the character list gets updated and if the query parameters have changed 
  // the values variable gets updated with the new query parameters:

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getCharacterList(parseInt(this.props.match.params.id), this.values.page, 
        this.values.gender, this.values.orderBy, this.values.order)
    } else if(this.props.location.search !== prevProps.location.search){
      this.values = queryString.parse(this.props.location.search)
    }
  }

  // Handles a click on the page buttons and updates the page query parameter in the URI

  handlePageChange = (pageValue) =>  {

    if(!pageValue) pageValue= this.values.page

    this.props.history.push(`${this.props.location.pathname}?page=${pageValue}&gender=${this.values.gender}&orderBy=${this.values.orderBy}&order=${this.values.order}`)
      
    this.props.getCharacterList(parseInt(this.props.match.params.id), pageValue, 
      this.values.gender, this.values.orderBy, this.values.order)
  }

  // Sorts characters based on specified orderBy and order direction values and updates 
  // the query parameters in the URI

  sortCharacters = (orderBy, order) => {

    this.props.getCharacterList(parseInt(this.props.match.params.id), this.values.page, 
      this.values.gender, orderBy, order)

    this.props.history.push(`${this.props.location.pathname}?page=${this.values.page}&gender=${this.values.gender}&orderBy=${orderBy}&order=${order}`)
  }

  // Every time the gender filter icon is clicked the list state is toggled:

  toggleGenderList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }


  // Filters characters based on the selected gender and updated the gender query parameter in the URI

  filterGender = (gender) => {
    this.props.getCharacterList(parseInt(this.props.match.params.id), this.values.page, gender, 
      this.values.orderBy, this.values.order)
    
    this.props.history.push(`${this.props.location.pathname}?page=${this.values.page}&gender=${gender}&orderBy=${this.values.orderBy}&order=${this.values.order}`)
  }

  render(){

    const {characters, totalCount, totalPages, next, previous, range} = this.props.characters
  
    return (
      <div>
        <MovieDetails characters={characters}
          sortCharacters={this.sortCharacters} toggleGenderList={this.toggleGenderList} 
          listState={this.state.listOpen} filterGender={this.filterGender}/>
        { totalPages > 1 &&
        <Pagination count={totalCount} pages={totalPages} next={next} previous={previous} range={range} 
          handlePageChange={this.handlePageChange} movieId={this.props.match.params.id}
          history={this.props.history}/>
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
   characters: state.characters
  }
}
  
const mapDispatchToProps = {
  getCharacterList,
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer)