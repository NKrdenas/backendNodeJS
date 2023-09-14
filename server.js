const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');
const uri = require('./uri');
// const router =  require('./components/message/network');
const router = require('./network/routes')

db(uri)

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// app.use(router)

router(app);

app.use('/app', express.static('public'))

app.listen(3000)
console.log('Listening: 3000');