import {Controller, Get, QueryParam} from 'routing-controllers'
import {PlanetsClimate}from './entity';
import Climate from '../climates/entity'


@Controller()
export default class PlanetsController {
    
  @Get('/planets')
  async getPlanets(
    @QueryParam('climate') climate: Climate
  ) {
    let planetList = await PlanetsClimate.find({climate})

    let planets = planetList.map(id => ({id: id.planet.id, name: id.planet.name, characters: id.planet.characters.filter(character => character.hairColor === "brown" || character.hairColor === "black")}))
    
    return {planets}
  }

}