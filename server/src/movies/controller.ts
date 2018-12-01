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
      @QueryParam('orderBy') orderBy: string,
      @QueryParam('order') order: string,
      @QueryParam('gender') gender: string,
      @Param('id') id: number
  ) {

    const movie = await Movie.findOne(id)

    if(movie){
    const totalCount = await movie.charactersMovie.length

    if (!page) page = 1
    const limit = 30
    const offset = (page - 1 ) * limit
    const totalPages = totalCount / limit
    let next
    let previous
    let range = {
      first: offset+1, 
      last: (offset + limit > totalCount) ? totalCount : offset + limit
    }

    if (totalPages > page) next = `page=${page+1}`
    else next = null
    if (page > 1) previous = `page=${page-1}`
    else previous = null

    return { movie, totalCount, totalPages, next, previous, range, orderBy, order, gender }
    } else{
    throw new NotFoundError('Cannot find the movie')
    }

  }
}
