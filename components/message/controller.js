const store = require('./store');

function addMesage(user, message){
    return new Promise((resolve, reject) =>{
        if (!user || !message){
            console.error("[messageController]: No se encuentra usuario y/o mensaje");
            return reject('Los datos no coinciden')
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }

        store.add(fullMessage)

        resolve(fullMessage)
    })
}

function getMessages(){
    return new Promise((resolve, reject)=> {
        resolve(store.list())
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

module.exports = {
    addMesage,
    getMessages,
    updateMessage
}