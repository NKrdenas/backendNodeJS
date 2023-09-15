const db = require('mongoose')
const Model = require('./model');

function addMesage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterUser){
    let filter = {};

    if (filterUser !== null) {
        filter = { user: filterUser };
    }

    try {
        const populated = await Model.find(filter)
        .populate('user')
        .exec();
        return populated;
    } catch (error) {
        throw new Error(error);
    }
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id : id
    })

    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

function removeMessage(id){
    return Model.findByIdAndDelete(id)
}

module.exports = {
    add: addMesage,
    list:  getMessage,
    updateText: updateText,
    remove: removeMessage
}