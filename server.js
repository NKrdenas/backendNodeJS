const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router()
const response = require('./network/response')

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

router.get('/message', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Valor personalizado"
    })
    // res.send("Lista de mensajes")
    response.succes(req, res, 'Lista de mensajes')
})

router.post('/message', (req, res) => {
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de errores')
    }else{
        response.succes(req, res, 'Creado correctamente', 201)
    }
    // res.status(201).send({error: "", body: 'Creado Correctamente'})
})

app.use('/app', express.static('public'))

app.listen(3000)
console.log('Listening: 3000');