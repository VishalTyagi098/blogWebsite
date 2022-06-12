import express from "express";
import mongoose from "mongoose";
import BlogPost from "../models/blogs";

const router = express.Router();

//{GET} Takes data from BlogPost model and saves it in blogPosts variable. [200]- displays data in json format.[404]- error
export const getAllBlogPosts= async(req,res)=>{
  try{
    const blogPosts=await BlogPost.find();
    res.status(200).json(blogPosts);
  } catch(error){
    res.status(404).json({message:error.message});
  }
};

//{POST} Takes data from user in req.body and saves it in variables. Create a new variable createNewPost and saves data from user in BlogPost object. [201]- saves the data in database using .save() function and display it in json format. [409]- error message.
export const addBlogPost=async(req,res)=>{
  const {title,description,fileUpload,creator,tags}=req.body;

  const createNewPost=new BlogPost({
    title,
    description,
    fileUpload,
    creator,
    tags,
  });

  try{
    await createNewPost.save();
    res.status(201).json(createNewPost);
  }catch (error){
    res.status(409).json({message:error.message});
  }
};

export default router;
