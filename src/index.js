
import mongoose from "mongoose";

import { DB_NAME } from "./constants.js";  
import express from "express";
import connectToDatabase from "./db/index.js";
const app = express();


// dotenv.config({
//     path: "./.env"
// }); // Load environment variables from .env file

connectToDatabase()
.then( ()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })

})
.catch((error) => {
    console.error("Error connecting to the database:", error);
   
})
    // Connect to MongoDB using the function from db/index.js










    



