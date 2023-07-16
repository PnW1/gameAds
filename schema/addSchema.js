const mongoose = require("mongoose")

const adSchema = new mongoose.Schema({
    title : String,
    description : String,
    probability : Number,
    url  : String    
})

module.exports = mongoose.model('ads', adSchema)