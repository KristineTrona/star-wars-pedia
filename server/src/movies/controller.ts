import { JsonController, Get, Param } from 'routing-controllers'
import Movie from './entity';


@JsonController()
export default class MovieController {
    
  @Get('/movies')
  async getMovies() {
    const events = await Movie.find()


    return { events }
  }

  @Get('/movies/:id')
  getEvent(
      @Param('id') id: number
  ) {
      return Movie.findOne(id)
  }



}
