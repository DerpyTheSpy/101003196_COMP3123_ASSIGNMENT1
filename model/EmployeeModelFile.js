const mongoose = require("mongoose")
const Schema = mongoose.Schema

//making employee info schema
const employeeSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        maxLength: 100
    },
    last_name: {
        type: String,
        required: true,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        maxLength: 50
    },
    gender: {
        type: String,
        required: true,
        maxLength: 25
        },
    salary: {
        type: Number,
        required: true,
    },
})

//exporting employee info schema
module.exports = mongoose.model("Employee", employeeSchema)