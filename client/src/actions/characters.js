import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const LOAD_MOVIE_DETAILS = 'LOAD_MOVIE_DETAILS'

export const SORT_HEIGHT = 'SORT_HEIGHT'


const loadMovieDetails = (data) => ({
  type: LOAD_MOVIE_DETAILS,
  payload: {
    characters: data.movie.charactersMovie.map(id => id.character),
    totalCount: data.totalCount, 
    totalPages: Math.ceil(data.totalPages),
    next: data.next, 
    previous: data.previous, 
    range: data.range
  }
})


export const getCharacterList = (movieId, page) => (dispatch) => {
  request
    .get(`${baseUrl}/movies/${movieId}?page=${page}`)
    .then(result => dispatch(loadMovieDetails(result.body)))
    .catch(err => console.error(err))
}

export const sortHeight = (characterList) => {
  return {
    type: SORT_HEIGHT,
    payload: characterList
  }
}