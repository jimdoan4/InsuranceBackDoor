// Requiring NPM packages
const express = require('express')
const app = express()
const logger = require('morgan')
const methodOverride = require('method-override')
const routes = require('./routes/index.js')
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());
// app.use(express.urlencoded({
//     extended: true
// }));
//Register middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(methodOverride('_method'))

app.use(logger('dev'))

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs')

app.use('/', routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})