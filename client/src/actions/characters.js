import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const LOAD_MOVIE_DETAILS = 'LOAD_MOVIE_DETAILS'

export const SORT_HEIGHT = 'SORT_HEIGHT'


const loadMovieDetails = (charactersList) => ({
  type: LOAD_MOVIE_DETAILS,
  payload: charactersList.map(listId => listId.character)
})


export const getCharacterList = (movieId) => (dispatch) => {
  request
    .get(`${baseUrl}/movies/${movieId}`)
    .then(result => dispatch(loadMovieDetails(result.body.charactersMovie)))
    .catch(err => console.error(err))
}

export const sortHeight = (characterList) => {
  return {
    type: SORT_HEIGHT,
    payload: characterList
  }
}