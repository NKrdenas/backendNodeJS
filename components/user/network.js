const express = require('express');
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller');

router.post('/', function(req, res){
    controller.addUser(req.body.name)
        .then(data => {
            response.succes(req, res, data, 201)
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, err)
        })
})

router.get('/', function(req, res){
    controller.listUsers()
        .then(users => {
            response.succes(req, res, users, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, e)
        })
})

module.exports = router