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


module.exports = router