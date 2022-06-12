import express from "express";
import mongoose from "mongoose";

const router = express.Router();

export const getAllBlogPosts=("/",(req,res)=>{
  res.send("Awesome Mern Blog");
})

export default router;
