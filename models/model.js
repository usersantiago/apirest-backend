const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        type: String
    },
    kill: {
        type:String
    }
})

module.exports = mongoose.model('Data', dataSchema)