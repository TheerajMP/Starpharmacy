const express = require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
const medmodel = require('./model/Med')
const supmodel = require('./model/Sup')
require("dotenv").config()
require('./config/db')()
const routes=require("./routes/index")
const path= require('path')
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors({origin: true, credentials: true}));
// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))






// app.use(express.static(path.json(__dirname,'./starpharmacy/build')))

// app.get('*',function(req,res){
//   res.sendFile(path.join(__dirname, './starpharmacy/build/index.html'))
// });

app.get("/user/count", async (req, res) => {
  let count = await medmodel.find().count();
  console.log("hiii")
  res.json({ count });
});

app.get("/user/sup", async (req, res) => {
  let count = await supmodel.find().count();
  res.json({ count });
});





app.use("/user",routes)

// app.use("/",(req,res)=>{
//     res.send("Hello")
// })

app.listen(4000,()=>{
    console.log("4000")
})