import './config/process'

import express from 'express'
import hbs from 'express-handlebars'
import morgan from 'morgan'
import { json as jsonParser } from 'body-parser'
import { log, error } from 'console'

import * as routes from './routes'

import questions from './data/questions.json'

const DEV = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000

const app = express()

app.engine('.hbs', hbs.create({
  extname: '.hbs',
  layoutsDir: 'client/views/layouts',
  partialsDir: ['client/views/partials'],
  defaultLayout: 'main',
  cache: !DEV,
  helpers: { production: () => DEV, inc: n => n + 1 }
}).engine)

app.set('views', 'client/views')
app.set('view engine', '.hbs')

app.use(express.static('static'))
app.use(jsonParser())
app.use(morgan(DEV ? 'dev' : 'combined'))

app.use('/api', routes.api)

app.get('/survey', (_, res) => res.render('survey', { questions }))
app.get('*', (_, res) => res.render('home'))

app.listen(PORT)
log(`\u2714 started on port: ${PORT}`)
