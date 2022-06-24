import express from "express";
import mongoose from "mongoose";
import BlogPost from "../models/blogs.js";

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


// {GET} It takes the single blog post data from BlogPost model and it finds it using the id.
export const getSinglePost=async(req,res)=>{
  const {id}=req.params;
  try{
    const singlepost=await BlogPost.findbyId(id);

    res.status(200).json(singlepost);
  } catch(error){
    res.status(404).json({message:error.message});
  }
};


// {PATCH}
export const updateSingleBlogPost=async(req,res)=>{
  const {id}=req.params;
  const {title,description,creator,fuleUpload,tags}=req.body;

  if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`post ${id} not found`);
  
  const updatedBlogPost={
    creator,
    title,
    description,
    tags,
    fileUpload,
    _id:id,
  };
  
  await BlogPost.findByIdAndUpdate(id,updatedBlogPost,{new:true});
  res.json(updatedBlogPost);
};

// {DELETE}
export const removeSingleBlogPost= async (req,res)=>{
  const {id}=req.params;

  if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`post ${id} not found`);
  
  await BlogPost.findByIdAndRemove(id);

  res.json({message:"Successfully deleted"});
};

// {PATCH}
export const likeBlogPost=async (req,res)=>{
  const {id}=req.params;

  if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  
  const post=await BlogPost.findById(id);

  const updatedBlogPost=await BlogPost.findByIdAndUpdate(
    id,
    {upvote:post.upvote+1},
    {new:true},
  );

  res.json(updatedBlogPost);
}

export default router;



