import express from 'express'
import  {getAllPosts, postCreater}  from '../controller/post.controller.js'
const router = express.Router()

// Routers
router.post("/postCreate",postCreater)
router.get("/",getAllPosts)

export default router