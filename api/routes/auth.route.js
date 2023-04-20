import express from "express";
import { register, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// import { deleteUser } from "../controllers/user.controller.js";
// import { verifyToken } from "../middleware/jwt.js";

export default router;
