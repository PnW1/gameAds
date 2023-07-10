const mongoose = require("mongoose")

const adSchema = new mongoose.Schema({
    name : String,
    url  : String    
})

module.exports = mongoose.model('ads', adSchema)