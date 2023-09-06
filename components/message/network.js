const express = require('express');
const router = express.Router()
const response = require('../../network/response')

router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Valor personalizado"
    })
    // res.send("Lista de mensajes")
    response.succes(req, res, 'Lista de mensajes')
})

router.post('/', (req, res) => {
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de errores')
    }else{
        response.succes(req, res, 'Creado correctamente', 201)
    }
    // res.status(201).send({error: "", body: 'Creado Correctamente'})
})

module.exports = router