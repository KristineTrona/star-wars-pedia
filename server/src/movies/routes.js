const {Router} = require('express')
const request = require('superagent')

const router = new Router
const swapiUrl = "https://swapi.co/api"


router.get('/movies', (req, res) => {

    request(`${swapiUrl}/films`)
    .then(response => res.send(response.body.results))
    .catch(console.error)
  
})

module.exports = router