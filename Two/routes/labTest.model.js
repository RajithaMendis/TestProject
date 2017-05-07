'use strict';
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const labTestSchema=new Schema({
    labTestName:{
        type:String,
        required:true
    } ,
    category:{
        type:String,
        required:true
    },
    fields:[{type:String}]
});
const LabTest=mongoose.model('LabTest',labTestSchema);
module.exports=LabTest;