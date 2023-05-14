const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    username:{
        type:String,required:true
    },
    email:{
        type:String,required:true
    },
    password:{
        type:String,required:true,minlength:6
    },
    confirmpassword:{
        type:String,required:true,minlength:6
    }
})
const usermodel=mongoose.model("user",userschema)
module.exports=usermodel