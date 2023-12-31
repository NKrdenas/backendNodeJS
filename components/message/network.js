const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller');

const storage = multer.diskStorage({
    destination: 'public/files',
    filename: function (req, file, cb) {
        const parts = file.originalname.split(".");
        cb(null, `${parts[0]}-${Date.now()}.${parts[parts.length - 1]}`);
      }
})

const upload = multer({ storage });

router.get('/', (req, res) => {
    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.succes(req, res, messageList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, e)
        })
})

router.post('/', upload.single('file'), (req, res) => {

    console.log(req.file);
    controller.addMesage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage)=>{
            response.succes(req, res, fullMessage, 201)
        })
        .catch(e => {
            
        response.error(req, res, 'Informacion invalida', 400, "Error en el Controller")
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
router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
        .then(() =>{
            response.succes(req, res, `Mensaje ${req.params.id} eliminado`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error Interno', 500, e)
        })
})

module.exports = router