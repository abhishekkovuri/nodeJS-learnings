// let http = require('http')
// response in plain text
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' })
//     res.end('Hey Abhishek Kovuri, you are great')
// }).listen(1925, '127.0.0.1')


// response in html format
// let http = require('http')
// let fs = require('fs')
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     let html = fs.readFileSync('./index.html')
//     res.end(html)
// }).listen(1925, '127.0.0.1')



// response in message template
let http = require('http')
let fs = require('fs')
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    let html = fs.readFileSync('./index1.html', 'utf8')
    let message = 'Hey Abhishek Kovuri'
    html = html.replace('{message}', message)
    res.end(html)
}).listen(1925, '127.0.0.1')



// use streams instead of readFileSync which improves the performance