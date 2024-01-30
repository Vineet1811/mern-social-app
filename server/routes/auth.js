import express from "express";
import { login } from "../controllers/auth.js";
import { register } from "../controllers/auth.js";

const router = express.Router();

// Define the route for user login
router.post("/login", login);

// Define the route for user registration
router.post("/register", register);

export default router;
