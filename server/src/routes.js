const express = require('express')
const ContentController = require('./controllers/ContentController')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.json({msg:'Hello Sailor! ⛵'})
})

routes.get('/contents', ContentController.index)
routes.put('/contents', ContentController.store)

module.exports = routes