const express = require('express');
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs');

const errorController = require('./controllers/errors')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + "/static"))

app.use('/admin', adminRoutes.router)
app.use(shopRoutes)

app.use(errorController.get404)

app.listen(3000);