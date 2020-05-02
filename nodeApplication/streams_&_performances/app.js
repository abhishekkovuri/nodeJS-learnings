// response in html format using streams
let http = require('http')
let fs = require('fs')
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream('./index.html').pipe(res)
}).listen(1925, '127.0.0.1')