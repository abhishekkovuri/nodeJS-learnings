let emits = require('./emitter')

let emtr = new emits()

emtr.on('greet', () => {
    console.log('somewhere hello is happened')
})


emtr.on('greet', () => {
    console.log('Event occured')
})

console.log('Hello !!')
emtr.emit('greet')