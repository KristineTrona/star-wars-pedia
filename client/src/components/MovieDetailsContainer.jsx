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

  values = queryString.parse(this.props.location.search)

  componentDidMount(){
    if (!this.values.page) this.values.page = 1
    this.props.getCharacterList(parseInt(this.props.match.params.id), this.values.page, this.values.gender, this.values.orderBy, this.values.order)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getCharacterList(parseInt(this.props.match.params.id), this.values.page, this.values.gender, this.values.orderBy, this.values.order)
    }
  }

  handlePageChange = (pageValue) =>  {
    if(!pageValue) pageValue= this.values.page
    this.props.history.push(`${this.props.location.pathname}?page=${pageValue}&gender=${this.values.gender}&orderBy=${this.values.orderBy}&order=${this.values.order}`)
    this.props.getCharacterList(parseInt(this.props.match.params.id), pageValue, this.values.gender, this.values.orderBy, this.values.order)
  }

  sortCharacters = (orderBy, order) => {
    this.props.getCharacterList(parseInt(this.props.match.params.id), this.values.page, this.values.gender, orderBy, order)
    this.props.history.push(`${this.props.location.pathname}?page=${this.values.page}&gender=${this.values.gender}&orderBy=${orderBy}&order=${order}`)
  }

  toggleGenderList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  filterGender = (gender) => {
    this.props.getCharacterList(parseInt(this.props.match.params.id), this.values.page, gender, this.valuesorderBy, this.values.order)
    this.props.history.push(`${this.props.location.pathname}?page=${this.values.page}&gender=${gender}&orderBy=${this.values.orderBy}&order=${this.values.order}`)
  }

  render(){

    const {characters, totalCount, totalPages, next, previous, range} = this.props.characters
  
    return (
      <div>
        <MovieDetails characters={characters && characters.slice(range.first-1, range.last)}
          sortCharacters={this.sortCharacters} toggleGenderList={this.toggleGenderList} 
          listState={this.state.listOpen}filterGender={this.filterGender}/>
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