import { combineReducers } from 'redux'
import movies from './movies'
import characters from './characters'
import planets from './planets'


export default combineReducers({
  movies,
  characters,
  planets
})