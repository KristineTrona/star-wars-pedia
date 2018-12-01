import React, {Component} from 'react'
import {connect} from 'react-redux'
import queryString from 'query-string'
import Pagination from './Pagination'
import {getCharacterList, sortHeight} from '../actions/characters'
import {MovieDetails} from './MovieDetails'


class MovieDetailsContainer extends Component{

    // state = {
    //   page: 1,
    //   // gender: 'all'
    // }
 
  loadPage = (newString) =>  {
    let values = queryString.parse(this.props.location.search)
    if(newString){
      values = queryString.parse(newString)
      this.props.history.push(`${this.props.location.pathname}?${newString}`)
    } 
    if (!values.page) values.page = 1
    this.props.getCharacterList(parseInt(this.props.match.params.id), values.page)

  }

  componentDidMount(){
    this.loadPage()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.loadPage()
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

  render(){

    const {characters, totalCount, totalPages, next, previous, range} = this.props.characters
  
    return (
      <div>
        <MovieDetails characters={ characters && characters.slice(range.first-1, range.last)}
          sortAscending={this.sortAscending} sortDescending={this.sortDescending}/>
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
  sortHeight
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer)