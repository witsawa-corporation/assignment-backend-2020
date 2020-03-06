import path from 'path'
import express from 'express'
import cors from 'cors'

import authentication from './middlewares/authentication'
import logErrors from './middlewares/logErrors'
import errorHandler from './middlewares/errorHandler'
import routes from './routes'

import getCars from './lib/getCars'

const app: express.Application = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(cors())
app.use(express.json())
app.use(authentication)
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', function(req, res) {
  res.send({
    title: 'Welcome to server',
    nodeEnv: process.env.NODE_ENV,
  })
})

app.get('/cars', async function(req, res) {
  const data = await getCars()
  res.render('index', { title: 'Cars', data })
})

app.use('/api', routes)
if (process.env.NODE_ENV !== 'test') {
  app.use(logErrors)
}
app.use(errorHandler)

export default app
