import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const LOAD_MOVIES = 'LOAD_MOVIES'
export const LOAD_MOVIE_DETAILS = 'LOAD_MOVIE_DETAILS'

export const SORT_HEIGHT = 'SORT_HEIGHT'


const loadMovies = (movies) => ({
  type: LOAD_MOVIES,
  payload: movies
})

const loadMovieDetails = (movie) => ({
  type: LOAD_MOVIE_DETAILS,
  payload: movie
})

export const getMovies = () => (dispatch) => {
  request
    .get(`${baseUrl}/movies`)
    .then(result => dispatch(loadMovies(result.body)))
    .catch(err => console.error(err))
}

// export const getMovieDetails = (movieId) => (dispatch) => {
//   request
//     .get(`${baseUrl}/movies/${movieId}`)
//     .then(result => dispatch(loadMovieDetails(result.body)))
//     .catch(err => console.error(err))
// }

// export const getMovieDetails = (movieId) => (dispatch) => {
//   request
//     .get(`${baseUrl}/movies/${movieId}`)
//     .then(result => result.body.forEach(link => 
//       request.get(link)
//       .then(character => dispatch(loadMovieDetails(character.body)))))
//     .catch(err => console.error(err))
// }

export const getMovieDetails = (movieId) => (dispatch) => {
  request
    .get(`${baseUrl}/movies/${movieId}`)
    .then(async result => dispatch(loadMovieDetails( await Promise.all(result.body
      .map(link => request.get(link)
      .then(character => character.body))))))
    .catch(err => console.error(err))
}

export const sortHeight = (characterList) => {
  return {
    type: SORT_HEIGHT,
    payload: characterList
  }
}