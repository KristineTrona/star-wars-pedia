import {Controller, Get} from 'routing-controllers'
import Planet from './entity';


@Controller()
export default class PlanetsController {
    
  @Get('/planets')
  async getPlanets() {
    const planets = await Planet.find()
    return { planets}
  }

//   @Get('/movies/:id')
//   getMovie(
//       @Param('id') id: number
//   ) {
//       return Movie.findOne(id)
//   }

}