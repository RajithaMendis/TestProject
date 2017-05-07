'use strict';
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const fieldSchema=new Schema({
   fieldName:{
       type:String,
       required:true
   } ,
    unit:{
        type:String,
        required:true
    },
    normalRange:{
       type:String
    }
});
const Field=mongoose.model('Field',fieldSchema);
module.exports=Field;