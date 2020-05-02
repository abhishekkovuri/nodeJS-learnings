function greetr () {
    this.greeting = 'Hello Abhishek Kovuri'
    this.greet = () => {
        console.log(this.greeting)
    }
} 
module.exports = new greetr()