import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";
import Token from "../models/token.js";
import getCurrentUser from "../utils/getCurrentUser.js";

export const register = async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    if (req.body.password !== req.body.cpassword)
      return res.status(400).send({ message: "Passwords do not match!" }); //throw new Error("Passwords must be same");

    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({ ...req.body, password: hash });
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await newUser.save();
    // res.status(201).send("User has been created.");

    const token = await new Token({
      userId: newUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
    const url = `${process.env.BASE_URL}auth/${newUser.id}/verify/${token.token}`;
    await sendEmail(newUser.email, "Verify Email", url);

    // userId: newUser._id, await sendEmail(newUser.email, "Verify Email", url);

    res
      .status(404)
      .send({ message: "An Email sent to your account please verify" });

    //
  } catch (err) {
    next(err);
    //res.status(500).send("Something went wrong. Please try again");
  }
};
//
export const verifytoken = async (req, res) => {
  try {
    // const currentUser = getCurrentUser();
    //`/gigs?userId=${currentUser._id}`)
    //const user = await User.findOne({ req.body.user.id: req.params.id });
    // const user = await User.findOne({ UserId: req.params.id });
    const user = await User.findOne({ _id: req.params.id });
    //    app.get("/users/:id", (req, res) => {
    // const userId = req.params.id;
    // Use the userId variable as needed
    // }
    // );
    // const userparam = req.params.id;

    // const user = await User.findOne({ userparam });
    // const user = await User.findOne({
    //   id: req.body.id,
    //   "req.params.id": req.params.id,
    // });
    // const user = await User.findOne({
    //   _id: currentUser._id,
    //   _id: req.params.id,
    // });

    //

    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,

      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    await User.updateOne({ _id: user._id }, { verified: true });
    await token.remove();

    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
//
// export const login = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });

//     if (!user) return next(createError(404, "User not found!"));
//     if (!user.verified) {
//       let token = await Token.findOne({ userId: user._id });
//       if (!token) {
//         token = await new Token({
//           userId: user._id,
//           token: crypto.randomBytes(32).toString("hex"),
//         }).save();
//         const url = `${process.env.BASE_URL}auth/${user.id}/verify/${token.token}`;
//         await sendEmail(user.email, "Verify Email", url);
//       }

//       return res
//         .status(400)
//         .send({ message: "An Email sent to your account please verify" });
//     }

//     const tokenn = user.generateAuthToken();
//     res.status(200).send({ data: tokenn, message: "logged in successfully" });
//     const isCorrect = bcrypt.compareSync(req.body.password, user.password);
//     if (!isCorrect)
//       //return next(createError(400, "Wrong password or username!"));
//       return next(createError(400, "Wong password or username"));

//     const token = jwt.sign(
//       {
//         id: user._id,
//         isSeller: user.isSeller,
//       },
//       process.env.JWT_KEY
//     );

//     const { password, ...info } = user._doc;
//     res
//       .cookie("accessToken", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .send(info);
//   } catch (err) {
//     next(err);
//   }
// };

// export const logout = async (req, res) => {
//   res
//     .clearCookie("accessToken", {
//       sameSite: "none",
//       secure: true,
//     })
//     .status(200)
//     .send("User has been logged out.");
// };
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      //return next(createError(400, "Wrong password or username!"));
      return next(createError(400, "Wong password or username"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};