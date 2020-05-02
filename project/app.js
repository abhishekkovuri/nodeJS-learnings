// response in html format using streams
let http = require('http')
let fs = require('fs')
http.createServer((req, res) => {
    if (req.url === '/') {
        fs.createReadStream('./index.html').pipe(res)
    } else if (req.url === '/name') {
        res.writeHead(200, { 'Content-Type': 'Application/json' })
        const obj = {
            firstName: 'Abhishek',
            lasttName: 'Kovuri',
        }
        res.end(JSON.stringify(obj))
    } else {
        res.writeHead(404)
        res.end()
    }
    
}).listen(1925, '127.0.0.1')