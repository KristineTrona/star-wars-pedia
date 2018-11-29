const {Router} = require('express')
const request = require('superagent')

const router = new Router
const swapiUrl = "https://swapi.co/api"


router.get('/movies', (req, res) => {

    request(`${swapiUrl}/films`)
    .then(response => res.send(response.body.results))
    .catch(console.error)
  
})

router.get('/movies/:id', (req, res) => {

    request(`${swapiUrl}/films/${req.params.id}`)
    .then(response => res.send(response.body.characters))
    .catch(console.error)
  
})

module.exports = router