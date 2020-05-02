let fs = require('fs')
let readable = fs.createReadStream('./greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 })
let writable = fs.createWriteStream('./greetCopy.txt')

readable.on('data', (chunk) => {
    console.log(chunk)
    writable.write(chunk)
})