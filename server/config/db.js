const mongoose =require('mongoose')
const connectdb=async()=>{
try {
    const db=process.env.MONGO_URI
    await mongoose.connect(db)
    console.log("mongodb connected")
} catch (error) {
    console.log(error)
    process.exit(1);
}
}
module.exports=connectdb