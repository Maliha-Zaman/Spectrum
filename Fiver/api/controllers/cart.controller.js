import User from "../models/cart.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import Cart from "../models/cart.model.js";
import Gig from "../models/gig.model.js";

import getCurrentUser from "../utils/getCurrentUser.js";

export const posttocart = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { id } = req.params;
    //const gig = await Gig.findById(req.params.id);
    const newproduct = await Gig.findOne({
      //...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      _id: req.params.id,
    });
    console.log(newproduct);
    const cart = await Cart.findOne({ userId });

    if (cart) {
      console.log("Existing cart found");
      //   const updatedCart = await Cart.findOneAndUpdate(
      //     { userId: userId },
      //     {
      //       $push: {
      //         products: {
      //           gigId: id,
      //           sellerId: product.userId,
      //           price: product.price,
      //           //quantity: quantity + 1,
      //         },
      //       },
      //     }
      //   );
      //   cart.products = cart.products.concat(
      //     products.map((newproduct) => ({
      //       gigId: id,
      //       sellerId: newproduct.userId,
      //       price: newproduct.price,
      //       //quantity: quantity + 1,
      //     }))
      //   );
      //   await cart.save();

      const updatedCart = await Cart.findOneAndUpdate(
        { userId: userId },
        {
          $push: {
            products: {
              gigId: id,
              sellerId: newproduct.userId,
              price: newproduct.price,
            },
          },
        },
        { new: true }
      );
      res.json({ message: "Product added to cart" });

      console.log("Cart  found");

      if (!updatedCart) {
        // Handle case where cart document doesn't exist for the user
        console.log("Cart nottttt found");
        //return;
      }

      console.log("Product added to cart");
    } else {
      console.log("No existing cart found");
      console.log("Something happened. Please try again");
      console.log(userId);
      const addnewProduct = new Cart({
        userId: userId,
        products: {
          gigId: id,
          sellerId: newproduct.userId,
          price: newproduct.price,
          //quantity: quantity + 1,
        },
      });
      await addnewProduct.save();
      res.json({ message: "Product added to cart" });
    }
  } catch (err) {
    next(err);
    //res.send("Something wrong. Please try again");

    console.log("directed wrong");
  }
};
//

export const getfromcart = async (req, res, next) => {
  //   try {
  //     const userId = req.userId;
  //     const { id } = req.params;
  //     //const gig = await Gig.findById(req.params.id);
  //     const product = await Gig.findOne({
  //       //...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
  //       _id: req.params.id,
  //     });
  //     console.log(product);
  //     console.log("Something happened. Please try again");
  //     console.log(userId);
  //     const newProduct = new Cart({
  //       userId: userId,
  //       products: {
  //         gigId: id,
  //         sellerId: product.userId,
  //         price: product.price,
  //         //quantity: quantity + 1,
  //       },
  //     });
  //     await newProduct.save();
  //   } catch (err) {
  //     next(err);
  //     res.send("Something wrong. Please try again");
  //     console.log("directed wrong");
  //   }
};
//
