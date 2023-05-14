const mongoose=require('mongoose')
const postschema=new mongoose.Schema({
    sno:{
        type:Number,default:-1
    },
    supplier_name:{
        type:String,required:true
    },
    shopname:{
        type:String,required:true
    },
    email:{
        type:String,required:true
    },
    
    contact:{
        type:String,required:true
    },
    drugname:{
        type:String,required:true
    },
    quantity:{
        type:String,required:true
    },
    order_date:{
        type:String,required:true
    },
    status:{
        type:String,required:true
    }
})
const postmodel=mongoose.model("postmedicine",postschema)
module.exports=postmodel