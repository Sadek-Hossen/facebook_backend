import express from "express";
import { createUser, getAllUsr } from "../controller/user.controller.js";

const router = express.Router();

// POST /api/user/userCreate
router.post("/userCreate", createUser);
router.get("/get",getAllUsr)
export default router;
