import express from 'express'
import  {postCreater}  from '../controller/post.controller.js'
const router = express.Router()

// Routers
router.post("/postCreate",postCreater)

export default router