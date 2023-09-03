const express = require('express');
const router = express.Router()

var app = express();

app.use(router)

router.get('/message', (re1, res) => {
    res.send("Lista de mensajes")
})

router.post('/message', (re1, res) => {
    res.send("Mensaje añadido")
})

// app.use('/', (req, res) => {
//     res.send('Hola')
// })

app.listen(3000)
console.log('Listening: 3000');