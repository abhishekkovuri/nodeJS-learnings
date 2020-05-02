function callB (callback) {
    this.data1 = {
        name : 'abhishek'
    }
    callback(data1)
}

callB((data) => {
    console.log(data.name)
})