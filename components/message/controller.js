const store = require('./store');

function addMesage(chat, user, message, file){
    return new Promise((resolve, reject) =>{
        if (!chat || !user || !message){
            console.error("[messageController]: No se encuentra usuario y/o mensaje");
            return reject('Los datos no coinciden')
        }

        let fileUrl = ''
        if(file){
            fileUrl = 'http://loclahost:3000/app/files' + file.filename
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date()
        }

        store.add(fullMessage)

        resolve(fullMessage)
    })
}

function getMessages(filterChat){
    return new Promise((resolve, reject)=> {
        resolve(store.list(filterChat))
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        console.log(id);
        console.log(message);
        if (!id || !message){
            reject('Invalid Data')
            return false
        }
        const result = await store.updateText(id, message)
        resolve(result)
    })
}

function deleteMessage(id){
    return new Promise((resolve, reject) => {
        if (!id){
            reject('Id invalido')
            return false
        }
        store.remove(id)
            .then(() =>[
                resolve()
            ])
            .catch(e => {
                reject(e)
            })
    })
}

module.exports = {
    addMesage,
    getMessages,
    updateMessage,
    deleteMessage
}