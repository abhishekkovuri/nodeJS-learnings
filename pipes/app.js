let fs = require('fs')
let zlib = require('zlib')
let readable = fs.createReadStream('./greet.txt')
let writable = fs.createWriteStream('./greetCopy.txt')
let compress = fs.createWriteStream('./greet.txt.gz')

let gzip = zlib.createGzip()

readable.pipe(writable)
readable.pipe(gzip).pipe(compress)