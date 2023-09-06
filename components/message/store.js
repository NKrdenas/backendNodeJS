const list = []

function addMesage(message){
    list.push(message)
}

function getMessage(){
    return list
}

module.exports = {
    add: addMesage,
    list:  getMessage
}