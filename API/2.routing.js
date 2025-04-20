import http from 'node:http'
import { zuko } from './users/Zuko.js'
const port = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end('Welcome to the user api')
          break

        case '/user/zuko':
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(zuko))
          break
        default:
          res.statusCode = 400
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('404 Error fetching user')
          break
      }
      break

    case 'POST':
      switch (url) {
        case '/user':{
          let body = ''

          // listen to data
          req.on('data', chunk => {
            body += chunk
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(data))
          })
          break
        }

        default:
          res.statusCode = 400
          res.setHeaders('Content-Type', 'text/html; charset=utf-8')
          return res.end('404 Error not found')
      }
      break

    default:
      break
  }
}

const server = http.createServer(processRequest)

server.listen(port, () => {
  console.log(`listenig on port http://localhost:${port}`)
})
