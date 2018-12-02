import {LOAD_MOVIE_DETAILS} from '../actions/characters'

export default function (state = {}, action={}){
  switch (action.type){
    case LOAD_MOVIE_DETAILS:
      return {...state = action.payload}
    default:
      return state
  }
}