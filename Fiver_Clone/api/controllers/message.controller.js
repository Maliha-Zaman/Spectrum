// import createError from "../utils/createError.js";
// import Message from "../models/message.model.js";
// import Conversation from "../models/conversation.model.js";

// export const createMessage = async (req, res, next) => {
//   const newMessage = new Message({
//     conversationId: req.body.conversationId,
//     userId: req.userId,
//     desc: req.body.desc,
//   });
//   try {
//     const savedMessage = await newMessage.save();
//     await Conversation.findOneAndUpdate(
//       { id: req.body.conversationId },
//       {
//         $set: {
//           readBySeller: req.isSeller,
//           readByBuyer: !req.isSeller,
//           lastMessage: req.body.desc,
//         },
//       },
//       { new: true }
//     );

//     res.status(201).send(savedMessage);
//   } catch (err) {
//     next(err);
//   }
// };
// export const getMessages = async (req, res, next) => {
//   try {
//     const messages = await Message.find({ conversationId: req.params.id });
//     res.status(200).send(messages);
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
