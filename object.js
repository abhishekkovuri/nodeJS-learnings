function Person () {
    this.firstName = 'Abhishek'
    this.lastName = 'Kovuri'
}
Person.prototype.greet = function () {
    console.log('Hi' + ' '+ this.firstName)
}
const abhu = new Person()
console.log(abhu)
abhu.greet()