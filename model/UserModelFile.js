const mongoose = require("mongoose")
const Schema = mongoose.Schema

//making user info schema
const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        maxLength: 100
    },
    password : {
        type: String,
        required: true,
        maxLength: 50
    },
    email : {
        type: String,
        required: true,
        maxLength: 50
    },
})

//exporting user info schema
module.exports = mongoose.model("User", userSchema)