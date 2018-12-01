import React, {Component} from 'react'
import {connect} from 'react-redux'
import queryString from 'query-string'
import Pagination from './Pagination'
import {getCharacterList, sortHeight, getUpdatedPage} from '../actions/characters'
import {MovieDetails} from './MovieDetails'


class MovieDetailsContainer extends Component{

    state = {
      gender: 'all',
      listOpen: false
    }
 
  loadPage = (newString) =>  {

    let values = queryString.parse(newString)
    this.props.history.push(`${this.props.location.pathname}?${newString}&gender=${this.state.gender}`)
    this.props.getUpdatedPage(this.props.match.params.id, values.page, this.state.gender)

  }

  componentDidMount(){

    let values = queryString.parse(this.props.location.search)

    if (!values.page) values.page = 1
    this.props.getCharacterList(parseInt(this.props.match.params.id), values.page, this.state.gender)

    this.props.getUpdatedPage(this.props.match.params.id, values.page, this.state.gender)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      let values = queryString.parse(this.props.location.search)

      if (!values.page) values.page = 1
      this.props.getCharacterList(parseInt(this.props.match.params.id), values.page, this.state.gender)
  
      this.props.getUpdatedPage(this.props.match.params.id, values.page, this.state.gender)
    }
  }

  sortAscending = () => {
    this.props.sortHeight(this.props.characters.characters.sort((a,b) => {
      return a.height-b.height
    }))
  }

  sortDescending = () => {
    this.props.sortHeight(this.props.characters.characters.sort((a,b) => {
      return b.height-a.height
    }))
  }

  toggleGenderList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }


  filterGender = (selectedGender) => {
    let values = queryString.parse(this.props.location.search)
    this.setState({gender: selectedGender})
    this.props.getUpdatedPage(this.props.match.params.id, values.page, selectedGender)
    this.props.history.push(`${this.props.location.pathname}?page=${values.page}&gender=${selectedGender}`)
  }

  render(){

    const {characters, totalCount, totalPages, next, previous, range, gender} = this.props.characters
  
    return (
      <div>
        <MovieDetails characters={ characters && characters.slice(range.first-1, range.last)}
          sortAscending={this.sortAscending} sortDescending={this.sortDescending}
          toggleGenderList={this.toggleGenderList} gender={gender} listState={this.state.listOpen}
          filterGender={this.filterGender}/>
        { totalPages > 1 &&
        <Pagination count={totalCount} pages={totalPages} next={next} previous={previous} range={range} 
          handlePageChange={this.loadPage} movieId={this.props.match.params.id}
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
  getUpdatedPage,
  sortHeight
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer)