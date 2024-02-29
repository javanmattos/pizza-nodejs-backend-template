
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000

const middlewares = require('./src/middlewares/error')
const router = require('./src/routes')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Front Page</h1>')
})

app.use('/api/', router)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`)
})