const express = require('express');
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller');

router.get('/', (req, res) => {
    controller.getMessages()
        .then((messageList) => {
            response.succes(req, res, messageList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, e)
        })
})

router.post('/', (req, res) => {

    controller.addMesage(req.body.user, req.body.message)
        .then((fullMessage)=>{
            response.succes(req, res, fullMessage, 201)
        })
        .catch(e => {
            
        response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador')
        })
})

module.exports = router