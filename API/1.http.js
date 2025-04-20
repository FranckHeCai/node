import http from 'node:http'

const port = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  console.log('request received')
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Welcome to the home page!')
  }
  if (req.url === '/about') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Welcome to the about page!')
  }
}

const server = http.createServer(processRequest)

server.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})
