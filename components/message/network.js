const express = require('express');
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller');

router.get('/', (req, res) => {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
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
router.patch('/:id', function (req, res){
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.succes(req,res, data, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error Interno', 500)
        })
})

module.exports = router