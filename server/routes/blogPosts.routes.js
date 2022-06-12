import express from "express";

const router = express.Router();

import {
  getAllBlogPosts,
  addBlogPost,
  getSinglePost,
  
} from "../controllers/blogPosts.controller";

router.get("/",getAllBlogPosts);

export default router;