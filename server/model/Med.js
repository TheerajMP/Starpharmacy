const mongoose=require('mongoose')
const medschema=new mongoose.Schema({
    sno:{
        type:Number,default:-1
    },
    medicine_name:{
        type:String,required:true
    },
    quantity:{
        type:Number,required:true
    },
    expiry_date:{
        type:Date,required:true
    },
    status:{
        type:String,required:true,default:'Alive'
    }
})
const medmodel=mongoose.model("postmed",medschema)
module.exports=medmodel