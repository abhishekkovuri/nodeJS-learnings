// response in html format using streams
let http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'Application/json' })
    const obj = {
        firstName: 'Abhishek',
        lastName: 'Kovuri'
    }
    res.end(JSON.stringify(obj))
}).listen(1925, '127.0.0.1')