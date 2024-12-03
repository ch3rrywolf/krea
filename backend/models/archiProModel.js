const { Schema, model } = require('mongoose')

const archiProSchema = new Schema({
    myId: {
        type: String,
        required: true
    },
    myFriends: {
        type: Array,
        default: []
    }
    
}, { timestamps : true })

module.exports = model('archi_pros',archiProSchema)