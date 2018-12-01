import {LOAD_MOVIE_DETAILS, SORT_HEIGHT} from '../actions/characters'

export default function (state = {}, action={}){
  switch (action.type){
    case LOAD_MOVIE_DETAILS:
      return {...state = action.payload}
      case SORT_HEIGHT:
      return {...state,
        characters: action.payload}
    default:
      return state
  }
}