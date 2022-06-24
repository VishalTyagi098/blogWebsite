import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import blogPosts from "./routes/blogPosts.routes.js"

dotenv.config();

const app = express();

app.use(bodyParser.json({limit:'50mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));

// Add routes after using cors
app.use(cors());
app.use("/api/blogs",blogPosts);


const DB_CONNECTION= process.env.DATABASE_URL;
const PORT=process.env.PORT||6000;

mongoose
  .connect(DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>
    app.listen(PORT,()=>
      console.log(`server is running at: http://localhost:${PORT}`)
    )
  )
  .catch((error)=>console.log(error));