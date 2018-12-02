import {Controller, Get, QueryParam, NotFoundError} from 'routing-controllers'
import {PlanetsClimate}from './entity';
import Climate from '../climates/entity'


@Controller()
export default class PlanetsController {
    
  @Get('/planets')
  async getPlanets(
    @QueryParam('climate') climate: Climate
  ) {

    // Find a list of planets based on climate:

    let planetList = await PlanetsClimate.find({climate})

    // If there are any planets with this climate return planets, where the characterlist is 
    // filtered for only characters with brown or black hair color else throw a 404 Not Found Error.

    if(planetList){

      let planets = planetList.map(id => ({id: id.planet.id, name: id.planet.name, 
        characters: id.planet.characters.filter(character => character.hairColor === "brown" || character.hairColor === "black")}))
    
      return {planets}
      
    } else{
      throw new NotFoundError('No planet has the selected climate')
    }
  }
}