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

/*
{
    "name": "Manuel",
    "nickname": "Cabesabuque",
    "affiliatedNumber": 123-23-45-33Y,
    "affiliationDate": "2021-08-14",
    "occupation": "Engineer",
    "birthdate": "1994-07-23",
    "deleted": false
    "astronomicalPoints": 13,
    "neasDiscovered":["niuno"],
    "necsDiscovered":["menostodavia"],
}
*/