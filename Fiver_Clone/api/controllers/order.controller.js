// import createError from "../utils/createError.js";
// import Order from "../models/order.model.js";
// import Gig from "../models/gig.model.js";
// import Stripe from "stripe";
// export const intent = async (req, res, next) => {
//   const stripe = new Stripe(process.env.STRIPE);

//   const gig = await Gig.findById(req.params.id);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: gig.price * 100,
//     currency: "usd",
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   const newOrder = new Order({
//     gigId: gig._id,
//     img: gig.cover,
//     title: gig.title,
//     buyerId: req.userId,
//     sellerId: gig.userId,
//     price: gig.price,
//     payment_intent: paymentIntent.id,
//   });

//   await newOrder.save();

//   res.status(200).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// };

// export const getOrders = async (req, res, next) => {
//   try {
//     const orders = await Order.find({
//       ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
//       isCompleted: true,
//     });

//     res.status(200).send(orders);
//   } catch (err) {
//     next(err);
//   }
// };
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
// import createError from "../utils/createError.js";

export const fn = async (req, res) => {
  // res.send("from controllers");
  // const user = await User.findById(req.params.id);
  // if (req.userId !== user._id.toString()) {
  //   return next(createError(403, "You can delete only your account!"));
  // }
  // await User.findByIdAndDelete(req.params.id);
  // res.status(200).send("deleted.");
};
// export const getUser = async (req, res, next) => {
//   const user = await User.findById(req.params.id);

//   res.status(200).send(user);
// };
