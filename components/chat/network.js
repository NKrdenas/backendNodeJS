const express = require('express');
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.post('/', function(req, res) {
    controller.addChat(req.body.users)
        .then(data =>{
            response.succes(req, res, data, 201)
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err)
        })
})

router.get('/:userId', function(req, res){
    controller.listChats(req.params.userId)
        .then(users =>{
            response.succes(req, res, users, 201)
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err)
        })
})

module.exports = router