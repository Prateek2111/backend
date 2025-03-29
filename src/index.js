import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();






















/* 
⁡⁢⁢⁢FIRST APPROACH⁡

import express from "express";
const app = express();


(async () => { // immediate invoke function expression (IIFE)
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("Err:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } 
  
  
  catch (error) {
    console.log("Error : ", error);
    throw err;
  }
})(); */
