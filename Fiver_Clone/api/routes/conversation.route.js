// import express from "express";
// import {
//   createConversation,
//   getConversations,
//   getSingleConversation,
//   updateConversation,
// } from "../controllers/conversation.controller.js";
// import { verifyToken } from "../middleware/jwt.js";

// const router = express.Router();

// router.get("/", verifyToken, getConversations);
// router.post("/", verifyToken, createConversation);
// router.get("/single/:id", verifyToken, getSingleConversation);
// router.put("/:id", verifyToken, updateConversation);

// export default router;
import express from "express";

// import { deleteUser } from "../controllers/user.controller.js";
// import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

// router.delete("/:id", verifyToken, deleteUser);
// router.get("/:id", getUser);
router.get("/test");
export default router;
