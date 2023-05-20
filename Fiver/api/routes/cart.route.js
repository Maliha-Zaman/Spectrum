import express from "express";
import { cart } from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/cart/:id", cart);
// router.post("/login", login);
// router.post("/logout", logout);
// router.get("/:id/verify/:token/", verifytoken);
// import { deleteUser } from "../controllers/user.controller.js";
// import { verifyToken } from "../middleware/jwt.js";

export default router;
