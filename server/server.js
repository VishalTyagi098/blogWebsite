import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json({limit:'50mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
app.use(cors());

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