const mongoose=require('mongoose')
const supschema=new mongoose.Schema({
    sno:{
        type:Number,default:-1
    },
    supplier_name:{
        type:String,required:true
    },
    email:{
        type:String,required:true
    },
    contact:{
        type:String,required:true
    },
    location:{
        type:String,required:true
    }
})
const supmodel=mongoose.model("postsup",supschema)
module.exports=supmodel