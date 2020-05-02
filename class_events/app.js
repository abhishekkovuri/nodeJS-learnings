let eve = require('./eventClass')
let grt = new eve()
grt.on('greet', (data) => {
    console.log(data)
})

grt.greet('AbhishekKovuri')