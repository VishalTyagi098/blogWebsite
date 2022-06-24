import express from "express";

const router = express.Router();

import {
  getAllBlogPosts,
  addBlogPost,
  getSinglePost,
  updateSingleBlogPost,
  removeSingleBlogPost,
  likeBlogPost,
} from "../controllers/blogPosts.controller.js";

router.get("/",getAllBlogPosts);
router.post("/",addBlogPost);
router.get("/:id",getSinglePost);
router.patch("/:id",updateSingleBlogPost);
router.delete("/:id",removeSingleBlogPost);
router.patch("/:id/likeedBlogPost",likeBlogPost);

export default router;