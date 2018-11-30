import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import MoviesController from './movies/controller'
import PlanetController from './planets/controller'

const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
  controllers: [
    PlanetController,
    MoviesController
   ]
})

setupDb()
.then(_ =>
app.listen(port, () => console.log(`Listening on port ${port}`))
)
.catch(err => console.error(err))
