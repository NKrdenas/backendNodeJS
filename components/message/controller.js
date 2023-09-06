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

        console.log(fullMessage);
        resolve(fullMessage)
    })
}

module.exports = {
    addMesage
}