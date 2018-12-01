import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const LOAD_MOVIE_DETAILS = 'LOAD_MOVIE_DETAILS'
export const UPDATE_PAGE_DETAILS = 'UPDATE_PAGE_DETAILS'

export const SORT_HEIGHT = 'SORT_HEIGHT'


const loadMovieDetails = (data) => ({
  type: LOAD_MOVIE_DETAILS,
  payload: {
    characters: data.movie.charactersMovie.map(id => id.character),
    // totalCount: data.totalCount, 
    // totalPages: Math.ceil(data.totalPages),
    // next: data.next, 
    // previous: data.previous, 
    // range: data.range
  }
})

const loadUpdatedPage = (data) => ({
  type: UPDATE_PAGE_DETAILS,
  payload: {
    totalCount: data.totalCount, 
    totalPages: Math.ceil(data.totalPages),
    next: data.next, 
    previous: data.previous, 
    range: data.range
  }
}) 


export const getCharacterList = (movieId, page, orderBy, order, gender) => (dispatch) => {
  request
    .get(`${baseUrl}/movies/${movieId}?page=${page}&orderBy=${orderBy}&order=${order}&gender=${gender}`)
    .then(result => dispatch(loadMovieDetails(result.body)))
    .catch(err => console.error(err))
}

export const getUpdatedPage = (movieId, page, orderBy, order, gender) => (dispatch) => {
  request
    .get(`${baseUrl}/movies/${movieId}?page=${page}&orderBy=${orderBy}&order=${order}&gender=${gender}`)
    .then(result => dispatch(loadUpdatedPage(result.body)))
    .catch(err => console.error(err))
}

export const sortHeight = (characterList) => {
  return {
    type: SORT_HEIGHT,
    payload: characterList
  }
}