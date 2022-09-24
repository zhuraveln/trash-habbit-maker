const express = require('express')
// const chalk = require('chalk');
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const trashHabbitRoutes = require('./routes/trash-habbits-routes')
const trashApiHabbitRoutes = require('./routes/api-trash-habbits-routes')
const createPath = require('./helpers/create-path')

// const errorMsg = chalk.bgKeyword('white').redBright
// const successMsg = chalk.bgKeyword('green').white

const app = express()

app.set('view engine', 'ejs')

mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => console.log('Connect to DB'))
  .catch((error) => console.log(error))

app.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${process.env.PORT}`)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.urlencoded(({ express: false })))

app.use(express.static('styles'))

app.use(trashHabbitRoutes)
app.use(trashApiHabbitRoutes)

app.use((req, res) => {
  res.status(404)
  res.render(createPath('error'), { title })
})