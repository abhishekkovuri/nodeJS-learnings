const welcome = require('./greet1')
welcome()

const welcome2 = require('./greet2').greet
welcome2()

const welcome3 = require('./greet3')
welcome3.greet()
welcome3.greeting = 'Hello Kovuri Abhishek'

const welcome4 = require('./greet3')
welcome4.greet()     // it returns Kovuri abhishek because it returns cached object

const welcome5 = require('./greet4')
let grt = new welcome5() // you will create a new method everytime

grt.greet()


const welcome6 = require('./greet5')
welcome6.greets()