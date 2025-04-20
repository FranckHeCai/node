import http from 'node:http'
import { availablePort } from './10.free-port.js'
import 'dotenv/config'

const port = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('data')
  res.end('Hello World !')
})

availablePort(port).then(port => {
  server.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`)
  })
})

// server.listen(3000, () => {
//   console.log(`listening on port http://localhost:${server.address().port}`)
// })
