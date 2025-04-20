import express from 'express'
import { zuko } from './users/Zuko.js'
const app = express()
app.disable('x-powered-by')

const port = process.env.PORT ?? 3000

// Middleware para extraer info de la request
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''

//   // listen to data
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now().toLocaleString()
//     req.body = data
//     next()
//   })
// })

app.use(express.json()) // Hace lo mismo que el middleware nativo de express

app.get('/', (req, res) => {
  res.send('My page')
})

app.get('/user/zuko', (req, res) => {
  res.json(zuko)
})

app.post('/user', (req, res) => {
  const { body } = req
  res.status(201).json(body)
})

app.use((req, res) => {
  res.status(404).send('404')
})

app.listen(port, () => {
  console.log(`listenig on port http://localhost:${port}`)
})
