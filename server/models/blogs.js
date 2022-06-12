import mongoose from "mongoose";

const blogSchema =mongoose.Schema({
  title: string,
  description: string,
  tags: [string],
  fileUpload: string,
  upvote:{
    type: Number,
    default: 0
  },
  creator: string,
  createdAt: {
    type: Date,
    default: new Date()
  },
});

var BlogPost=mongoose.model("BlogArticle",blogSchema);

export default BlogPost;