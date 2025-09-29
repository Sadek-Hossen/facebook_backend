import express from "express";
import { createUser } from "../controller/user.controller.js";

const router = express.Router();

// POST /api/user/userCreate
router.post("/userCreate", createUser);

export default router;
