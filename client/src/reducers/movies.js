import {LOAD_MOVIES} from '../actions/movies'

export default function (state = [], action={}){
  switch (action.type){
    case LOAD_MOVIES:
      return [...state = action.payload]
    default:
      return state
  }
}