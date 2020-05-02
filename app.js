// // functions 
// function greet (hi) {
//     console.log(hi)
// }
// // greet('hi')


// // functions as first-class
// function log (fn) {
//     fn('hi');    
// }

// // log(greet)

// // functions as expressions
// let fate = function () {
//     console.log('hi')
// }
// log(fate)
// let app1 = require('./module')
// app1.greet()
// console.log(app1.firstName)
// console.log(app1.lastName)





// const greet = require('./greet')
// greet.english()
// greet.telugu()




const welcome = require('./module_patterns/greet1')
welcome()