import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const LOAD_MOVIE_DETAILS = 'LOAD_MOVIE_DETAILS'
export const UPDATE_PAGE_DETAILS = 'UPDATE_PAGE_DETAILS'

export const SORT_HEIGHT = 'SORT_HEIGHT'


const loadMovieDetails = (data) => ({
  type: LOAD_MOVIE_DETAILS,
  payload: data
})



export const getCharacterList = (movieId, page, gender, orderBy, order) => (dispatch) => {
  request
    .get(`${baseUrl}/movies/${movieId}?page=${page}&gender=${gender}&orderBy=${orderBy}&order=${order}`)
    .then(result => dispatch(loadMovieDetails(result.body)))
    .catch(err => console.error(err))
}