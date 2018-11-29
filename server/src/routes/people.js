const {Router} = require('express')
const request = require('superagent')

const router = new Router
const swapiUrl = "https://swapi.co/api"


router.get('/people', (req, res) => {

    request(`${swapiUrl}/people`)
    .then(response => res.send(response.body.results))
    .catch(console.error)
  
})


module.exports = router