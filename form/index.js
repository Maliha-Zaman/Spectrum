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

// mongoose.set('strictQuery', false);
// module.exports = () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(process.env.DB, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };
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

