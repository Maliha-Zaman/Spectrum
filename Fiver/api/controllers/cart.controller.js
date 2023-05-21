import Cart from "../models/cart.model.js";
import Gig from "../models/gig.model.js";
import User from "../models/user.model.js";

import getCurrentUser from "../utils/getCurrentUser.js";

// const gigowner = await Gig.findOne({
//   //...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
//   userId: req.userId,
// });
// if (gigowner && gigowner.userId != null) {
//   console.log(orders.userId);
//   //   return res.status(400).send({ message: "You can not buy your own gig" }); //throw new Error("Passwords must be same");
//   return res.json({ message: "You can not buy your own product" });
// }
export const posttocart = async (req, res, next) => {
  try {
    console.log("Cart");
    const seller = await User.findOne({
      //...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      _id: req.userId,
    });
    if (seller.isSeller) {
      //   console.log(orders.userId);
      //   return res.status(400).send({ message: "You can not buy your own gig" }); //throw new Error("Passwords must be same");
      return res.json({ message: "You are not elligible to buy products" });
    }
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

      const updatedCart = await Cart.findOneAndUpdate(
        { userId: userId },
        {
          $push: {
            products: {
              gigId: id,
              sellerId: newproduct.userId,
              price: newproduct.price,
              title: newproduct.title,
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
          title: newproduct.title,
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
  try {
    const cart = await Cart.find({
      //...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      userId: req.userId,
    });
    // console.log("uuuu");
    res.send(cart);
    // status(200)
  } catch (err) {
    next(err);
  }
};
//
