// import express from "express";
// import {
//   createGig,
//   deleteGig,
//   getGig,
//   getGigs
// } from "../controllers/gig.controller.js";
// import { verifyToken } from "../middleware/jwt.js";

// const router = express.Router();

// router.post("/", verifyToken, createGig);
// router.delete("/:id", verifyToken, deleteGig);
// router.get("/single/:id", getGig);
// router.get("/", getGigs);

// export default router;
import express from "express";

// import { deleteUser } from "../controllers/user.controller.js";
// import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

// router.delete("/:id", verifyToken, deleteUser);
// router.get("/:id", getUser);
router.get("/test");
export default router;
