const mongoose = require('mongoose')

const ComponentSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
})

const ComponentModel = mongoose.model("components", ComponentSchema)
module.exports = ComponentModel