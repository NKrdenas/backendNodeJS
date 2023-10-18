const express = require('express');
const app = express();
const server = require('http').Server(app)

const bodyParser = require('body-parser');
const socket = require('./socket')
const db = require('./db');
const uri = require('./uri');
// const router =  require('./components/message/network');
const router = require('./network/routes')

db(uri)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

socket.connect(server)

router(app);

app.use('/app', express.static('public'))

app.listen(3000, () => {
    console.log('Listening: 3000')
})