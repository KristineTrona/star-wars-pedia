import {LOAD_MOVIE_DETAILS, UPDATE_PAGE_DETAILS, SORT_HEIGHT} from '../actions/characters'

export default function (state = {characters:[], totalCount: null, totalPages: null, next: '', previous:'', range: {}}, action={}){
  switch (action.type){
    case LOAD_MOVIE_DETAILS:
      return {...state, ...state.characters = action.payload}
    case UPDATE_PAGE_DETAILS:
      return {...state,
        totalCount: action.payload.totalCount, 
        totalPages: action.payload.totalPages, 
        next: action.payload.next, 
        previous:action.payload.previous, 
        range: action.payload.range}
    case SORT_HEIGHT:
      return {...state,
        characters: action.payload}
    default:
      return state
  }
}