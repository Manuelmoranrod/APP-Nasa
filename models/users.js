const mongoose = require('mongoose')

let usersSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    nickname:String,
    affiliatedNumber: {
        type: Number, 
        unique: true, 
        required: true
    },
    affiliationDate:Date,
    occupation:String,
    birthdate:Date,
    deleted:Boolean,
    astronomicalPoints:Number,
    neasDiscovered:[String],
    necsDiscovered:[String],
})


module.exports = mongoose.model('Users', usersSchema)