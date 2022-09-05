// 启动命令 node ./src/test.js
// 可通过localhost:3000访问
const http = require('http')
const os = require('os')
console.log("server is starting")
var handler = (request, response) => {
  console.log("Received request from " + request.connection.remoteAddress)
  response.writeHead(200)
  response.end('This is server running in ' + os.hostname)
}
var www = http.createServer(handler)
www.listen(3000)