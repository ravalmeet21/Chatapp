import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import { updateProfile, chackAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup);

router.post("/login", login);

router.post("/logout",logout);

router.put("/updateProfile",protectRoute,updateProfile);

router.get("/chack",protectRoute,chackAuth);


export default router;

