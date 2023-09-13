const db = require('mongoose')
const Model = require('./model');
const username = encodeURIComponent("<UsuarioDefinitivo>")
const password = encodeURIComponent("<l5n9SRYeKfGtEw1h>")

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

async function getMessage(){
    const messages = await Model.find()
    return messages
}

module.exports = {
    add: addMesage,
    list:  getMessage
}

//l5n9SRYeKfGtEw1h: UsuarioDefinitvo