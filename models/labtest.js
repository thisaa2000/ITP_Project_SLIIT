const mongoose = require('mongoose');

//labtestSchema is the name of the Schema
const labtestSchema = new mongoose.Schema({
    
    SpecimenType:{
        type:String,
        reqiured:true
    },
    PlateletCount:{
        type:Number,
        reqiured:true
    },
    Haemoglobin:{
        type:Number,
        reqiured:true
    },
    RBC:{
        type:Number,
        reqiured:true
    },
    WBC:{
        type:Number,
        reqiured:true
    }
});

module.exports = mongoose.model('Blood Count Test',labtestSchema);