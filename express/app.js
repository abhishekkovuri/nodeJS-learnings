let express = require('express')
let fs = require('fs')
let bodyParser = require('body-parser')

let app = express()

let urlencodedParser = bodyParser.urlencoded({ extended: false })
let jsonParser = bodyParser.json()

app.use('/assets', express.static('./public'))

app.set('view engine', 'ejs')

app.use('/', (req, res, next) => {
    console.log('Request Url' + req.url)
    next()
})
// app.get('/', (req, res) => {
//     fs.createReadStream('./index.html').pipe(res)
// })

app.get('/person/:id', (req, res) => {
    // res.send('<html><head><link href=assets/style.css type = text/css rel=stylesheet/></head><body> <h1>Kovuri Abhishek   ' + req.params.id + '</h1></body < h1 ></html > ')
    res.render('index', { ID: req.params.id, Qstr: req.query.qstr})
})

app.get('/', (req, res) => {
    res.render('post')
})

app.get('/name', (req, res) => {
    const obj = {
        firstName: 'Abhishek',
        lastName: 'Kovuri',
    }
    res.json(obj)
})

app.post('/person', urlencodedParser, (req, res) => {
    res.send('Thank you god!!!')
    console.log(req.body.firstName)
    console.log(req.body.lastName)
})

app.post('/personjson', jsonParser, (req, res) => {
    res.send('Thank you god!!!')
    console.log(req.body.firstName)
    console.log(req.body.lastName)
})



app.listen(1996)