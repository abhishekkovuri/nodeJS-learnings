function greetr () {
    this.greetings = "Abhishek Kovuri 5G2"
    this.greet = () => {
        console.log(this.greetings)
    }
}

module.exports = greetr