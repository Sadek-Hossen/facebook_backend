import express from "express"

import cors from "cors"
import dotenv from "dotenv"
import userRouter from "./src/router/user.router.js"
import {connectDB} from "./src/config/db.js"

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // CORS সমস্যা সমাধান

// Environment variables
const port = process.env.PORT || 5000;
const url = process.env.MONGO_URL;

// MongoDB connect
connectDB({ url });

// Routers
app.use("/api/user", userRouter);

// Root route
app.get("/", (req, res) => {
  res.send("<h1>This is our root page</h1>");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});