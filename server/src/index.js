const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config({ path: './src/config/keys.env'})

const app = express()
const PORT = process.env.PORT


mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> console.log('Mongoose connected to MongoDB Server'))


/**
 * Probably cors will be needed ( config it after deployed )
 */

// app.use( cors() )

/**
 * Alternative for body-parser
 */
// app.user ( express.json() )


app.use(routes)


app.listen(PORT, () => {
  console.log(require('./putrisCollabTerminalBanner'))
  console.log(`Server running, listening at http://localhost:${PORT}`)
})
