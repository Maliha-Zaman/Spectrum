require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");
const User = require("./dataSchema");
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

// mongoose.connect(
//     "mongodb+srv://nazia:Oishee2002@cluster0.jntxsyg.mongodb.net/test",
//     {
//       useNewUrlParser: true,
//     }
//   );
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

  const formData = new User({
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
    let seller = await demouser.findOne({ email: req.body.email });
    if (seller)
      return res
        .status(409)
        .send({ message: "Seller with given email already Exist!" });

    await formData.save();
    res.send("inserted data..");
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`port connected ${port}...`));
