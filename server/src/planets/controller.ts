import {Controller, Get, Param} from 'routing-controllers'
import Planet from './entity';


@Controller()
export default class PlanetsController {
    
  @Get('/planets')
  async getPlanets() {
    const planets = await Planet.find()
    return { planets}
  }

  @Get('/planets/:id')
  getMovie(
      @Param('id') id: number
  ) {
      return Planet.findOne(id)
  }

}