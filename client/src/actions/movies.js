import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const LOAD_MOVIES = 'LOAD_MOVIES'


const loadMovies = (movies) => ({
  type: LOAD_MOVIES,
  payload: movies.movies
})

export const getMovies = () => (dispatch) => {
  request
    .get(`${baseUrl}/movies`)
    .then(result => dispatch(loadMovies(result.body)))
    .catch(err => console.error(err))
}