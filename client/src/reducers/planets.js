import {LOAD_PLANETS} from '../actions/planets'

export default function (state = [], action={}){
  switch (action.type){
    case LOAD_PLANETS:
      return [...state = action.payload]
    default:
      return state
  }
}