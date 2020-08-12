const express = require('express')
const ContentController = require('./controllers/ContentController')
const UserController = require('./controllers/UserController')
const RatingController = require('./controllers/RatingController')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.json({msg:'Hello Sailor! ⛵'})
})

routes.get('/contents', ContentController.index)
routes.post('/contents', ContentController.store)

routes.put('/users', UserController.update)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.store)

routes.get('/ratings', RatingController.index)
routes.post('/ratings', RatingController.store)

module.exports = routes