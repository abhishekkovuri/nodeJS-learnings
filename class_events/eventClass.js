'use strict'

let EventEmitter = require('events')
module.exports = class Events extends EventEmitter {
    constructor() {
        super()
        this.names = 'abhishek'  
    }

    greet (data) {
        console.log(this.names)
        this.emit('greet',data)
    }
}
