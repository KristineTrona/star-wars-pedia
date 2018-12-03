import {Controller, Get, Param, QueryParam, NotFoundError} from 'routing-controllers'
import Movie from './entity';


@Controller()
export default class MoviesController {
    
  @Get('/movies')
  async getMovies() {
    const movies = await Movie.find()
    return { movies }
  }

  @Get('/movies/:id')
  async getMovie(
      @QueryParam('page') page: number,
      @QueryParam('gender') gender: string,
      @QueryParam('orderBy') orderBy: string,
      @QueryParam('order') order: string,
      @Param('id') id: number
  ) {

    const movie = await Movie.findOne(id)

    // First check if there is a movie with this id, if not throw 404 Not found error

    if(movie){

      // Retrieve the list of characters from the movie details:

      let characters = movie.charactersMovie.map(characterId => characterId.character)

      // Filter based on gender, if the value is "all" then no filteris applied:

      if(gender === "male" || gender === "female"){
        characters = characters.filter(character => character.gender === gender)
      }

      //Sorting - first check if orderBy and order are both specified, then sort accordingly:

      if(orderBy && order){
        if(orderBy === "height" && order === "asc"){
          characters.sort((a,b) => {
            return a.height-b.height
          })
        } else if(orderBy === "height" && order ==="desc"){
          characters.sort((a,b) => {
            return b.height-a.height
          })
        } else if(orderBy ==="age" && order === "asc"){
          characters.sort((a,b) => {
            return parseInt(a.birthYear)-parseInt(b.birthYear)
          })
        } else if(orderBy ==="age" && order === "desc"){
          characters.sort((a,b) => {
            return parseInt(b.birthYear)-parseInt(a.birthYear)
          })
        }
      }

      // Pagination:

      const totalCount = await movie.charactersMovie.length

      if (!page) page = 1
      const limit = 30
      const offset = (page - 1 ) * limit
      const totalPages = Math.ceil(totalCount / limit)
      let next
      let previous
      let range = {
        first: offset+1, 
        last: (offset + limit > totalCount) ? totalCount : offset + limit
      }
      if (totalPages > page) next = {page: page+1}
      else next = null
      if (page > 1) previous = {page: page-1}
      else previous = null
    
      return { characters, totalCount, totalPages, next, previous, range }

    } else {
      throw new NotFoundError('Movie with this id does not exist')}
    }
}
