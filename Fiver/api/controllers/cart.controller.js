import User from "../models/cart.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";
import Token from "../models/token.js";
import getCurrentUser from "../utils/getCurrentUser.js";

export const cart = async (req, res, next) => {
  //   try {
  //     let user = await User.findOne({ email: req.body.email });
  //     if (user)
  //       return res
  //         .status(409)
  //         .send({ message: "User with given email already Exist!" });
  //     if (req.body.password !== req.body.cpassword)
  //       return res.status(400).send({ message: "Passwords do not match!" }); //throw new Error("Passwords must be same");
  //     // userId: newUser._id, await sendEmail(newUser.email, "Verify Email", url);
  //     res
  //       .status(404)
  //       .send({ message: "An Email sent to your account please verify" });
  //     //
  //   } catch (err) {
  //     next(err);
  //     //res.status(500).send("Something went wrong. Please try again");
  //   }
};
//
