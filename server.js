const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router()

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

router.get('/message', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Valor personalizado"
    })
    res.send("Lista de mensajes")
})

router.delete('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.status(201).send({error: "", body: 'Creado Correctamente'})
})

app.listen(3000)
console.log('Listening: 3000');