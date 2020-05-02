let fs = require('fs')
let file = fs.readFileSync(__dirname + '/greet.txt', 'utf8')
console.log(file)
let file2 = fs.readFile('./greet.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Abhishek')
    } else {
        console.log(data)
    }
})
