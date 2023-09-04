const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router()

var app = express();
app.use(bodyParser)
app.use(router)

router.get('/message', (re1, res) => {
    res.send("Lista de mensajes")
})

router.delete('/message', (re1, res) => {
    console.log(req.body);
    res.send("Mensaje añadido")
})

app.listen(3000)
console.log('Listening: 3000');