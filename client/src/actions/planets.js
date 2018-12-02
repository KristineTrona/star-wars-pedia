import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const LOAD_PLANETS = 'LOAD_PLANETS'


const loadPlanets = (planets) => ({
  type: LOAD_PLANETS,
  payload: planets.planets
})

export const getPlanets = (climate) => (dispatch) => {
  request
    .get(`${baseUrl}/planets?climate=${climate}`)
    .then(result => dispatch(loadPlanets(result.body)))
    .catch(err => console.error(err))
}