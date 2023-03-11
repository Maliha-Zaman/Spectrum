const express = require("express");
const mongoose= require("mongoose");

const app= express();

const port=3000
const path = require("path");
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
mongoose.connect(`mongodb+srv://nazia:Oishee2002@cluster0.jntxsyg.mongodb.net/test`)
.then(()=>{
    console.log("Connected")
}).catch(()=>{
    console.log("Wrong")
})


const SellUser=require("./views/model/user")
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/",async(req,res)=>{
    const data = new SellUser(req.body)
    await data.save()
    res.send("Save data")
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})

