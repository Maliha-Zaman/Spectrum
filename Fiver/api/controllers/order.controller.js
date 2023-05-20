// import createError from "../utils/createError.js";

//

//   await newOrder.save();

//   res.status(200).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// };
////yyyyy
// export const confirm = async (req, res, next) => {
//   try {
//     const orders = await Order.findOneAndUpdate(
//       {
//         payment_intent: req.body.payment_intent,
//       },
//       {
//         $set: {
//           isCompleted: true,
//         },
//       }
//     );

//     res.status(200).send("Order has been confirmed.");
//   } catch (err) {
//     next(err);
//   }
// };
// import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import Gig from "../models/gig.model.js";
import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";

import Stripe from "stripe";
import getCurrentUser from "../utils/getCurrentUser.js";
// const userData = localStorage.getItem("user");

// // Check if user data exists
// if (userData) {
//   // User data exists in local storage
//   const user = JSON.parse(userData);
//   // Perform actions with the user data
//   console.log("User:", user);
// } else {
//   // User data does not exist in local storage
//   console.log("User data not found");
// }
// const orders = await Gig.findOne({
//   //...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
//   userId: req.userId,
// });
// if (orders && orders.userId != null) {
//   console.log(orders.userId);
//   return res.status(400).send({ message: "You can not buy your own gig" }); //throw new Error("Passwords must be same");
// } else {
//   console.log("No orders found for the user");
// }
// const user= getCurrentUser();
// if(orders.userId!=null)
// {
//   console.log("rders.userId");

// }
// if(!orders.userId){
//   return res.status(400).send({ message: "You can not buy your own gig" }); //throw new Error("Passwords must be same");

// }
export const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE);
  const cart = await Cart.findOne({ userId: req.userId });

  if (!cart) {
    return res.status(400).send({ message: "Cart not found" });
  }
  const orders = [];
  for (const product of cart.products) {
    // const gig = await Gig.findById(req.params.id);
    const gig = await Gig.findById(product.gigId);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: product.price * product.quantity * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      price: product.price,
      quantity: product.quantity,
      payment_intent: paymentIntent.id,
    });
    // await newOrder.save();
    orders.push(newOrder);
  }
  try {
    await Order.insertMany(orders);

    res.status(200).send({ clientSecret: paymentIntent.client_secret });
    //res.status(200).send({ orders: createdOrders });
  } catch (error) {
    res.status(500).send({ message: "Failed to create orders" });
  }
};
// export const createOrder = async (req, res, next) => {
//   try {
//     const gig = await Gig.findById(req.params.gigId);
//     const newOrder = new Order({
//       gigId: gig._id,
//       img: gig.cover,
//       title: gig.title,
//       buyerId: req.userId,
//       sellerId: gig.userId,
//       price: gig.price,
//       payment_intent: "temporary",
//     });
//     await newOrder.save();

//     res.status(200).send("successful");
//   } catch (err) {
//     next(err);
//   }
// };
export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      //...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      buyerId: req.userId,
      isCompleted: true,
    });
    // console.log("uuuu");
    res.send(orders);
    // status(200)
  } catch (err) {
    next(err);
  }
};
// export const getUser = async (req, res, next) => {
//   const user = await User.findById(req.params.id);

//   res.status(200).send(user);
// };

export const confirm = async (req, res, next) => {
  try {
    const orders = await Order.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
        },
      }
    );

    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
};
