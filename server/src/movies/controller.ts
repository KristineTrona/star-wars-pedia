import {Controller, Get, Param} from 'routing-controllers'
import Movie from './entity';


@Controller()
export default class MoviesController {
    
  @Get('/movies')
  async getMovies() {
    const movies = await Movie.find()
    return { movies }
  }

  @Get('/movies/:id')
  getMovie(
      @Param('id') id: number
  ) {
      return Movie.findOne(id)
  }
}
