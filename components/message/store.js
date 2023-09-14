const db = require('mongoose')
const Model = require('./model');

//Ponemos la uri en un archivo "uri.js, lo exportamos y añadimos a un .gitignore
const uri = require('../../uri')

db.Promise = global.Promise
db.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'backendNodeJS'
})
    .then(() => console.log('[db]: Conectada con exito'))
    .catch(err => console.error('[db]: ', err))

function addMesage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterUser){
    let filter = {}
    if (filterUser !== null) {
        filter = {user: filterUser}
    }
    const messages = await Model.find(filter)
    return messages
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id : id
    })

    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

module.exports = {
    add: addMesage,
    list:  getMessage,
    updateText: updateText
}

//l5n9SRYeKfGtEw1h: UsuarioDefinitvo