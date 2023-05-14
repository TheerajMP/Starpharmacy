const mongoose =require('mongoose')
const connectdb=async()=>{
try {
    const db="mongodb+srv://Theeraj7:Theeraj7@cluster0.awuml.mongodb.net/starpharmacy"
    await mongoose.connect(db)
    console.log("mongodb connected")
} catch (error) {
    console.log(error)
    process.exit(1);
}
}
module.exports=connectdb