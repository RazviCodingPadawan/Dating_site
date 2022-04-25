let express = require('express')
const path = require('path')
let app = express()
let port = 4000
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1/LAmour')
var profileSchema = new mongoose.Schema({
    username: '',
    fullname: '',
    city: '',
    profession: '',
    hobbies: {}
})

var User = mongoose.model('user', profileSchema)

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../create.html'))
})

app.post('/create', (req, res) => {
    var myData = new User(req.body)
    myData.save().then(item => {
        res.send('user saved to databes')
    }).catch(err => {
        res.status(400).send('unable to save to database')
    })
})

app.listen(port, () => {
    console.log('server started at' + port)
})
