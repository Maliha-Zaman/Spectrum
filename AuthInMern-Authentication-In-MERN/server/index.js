require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");
const demoUser = require("./dataSchema");
const mongoose = require("mongoose");

// database connection
connection();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);


app.post("/insert", async (req, res) => {
  const storename = req.body.storename;
  const platformlink = req.body.platformlink;
  const logoimage = req.body.logoimage;
  const email = req.body.email;
  const phone = req.body.phone;
  const division = req.body.division;
  const address = req.body.address;
  const bankaccount = req.body.bankaccount;
  const idimage = req.body.idimage;

  const formData = new demoUser({
    storename: storename,
    platformlink: platformlink,
    logoimage: logoimage,
    email: email,
    phone: phone,
    division: division,
    address: address,
    bankaccount: bankaccount,
    idimage: idimage,
  });
  try {
    let user = await demoUser.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "Seller with given email already Exist!" });
    await formData.save();
    res
      .status(201)
      .send({ message: "Your information have been submitted successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
app.post("/userData", async(req,res)=>{
  const{token} = req.body;
  try {
      const user = jwt.verify(token, JWT_SECRET);
      console.log(user);
      const useremail = user.email;
      demoUser.findOne({email:useremail})
          .then((data)=>{
              res.send({status:"ok", data:data });
          })
          .catch ((error) =>{
          res.send({status:"error", data:error});
          });
  } catch(error){
      res.send({status:"error", data: error});
  }
})
// app.get("/getAllUser",async(req,res)=>
// {
//   try{
//     const allUser= await User.find({});
//     res.send({status:"ok",data:allUser});
//   }catch(error)
//   {
//    console.log(error);
//   }
// })

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`port connected ${port}...`));
