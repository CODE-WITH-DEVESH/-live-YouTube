
import mongoose from "mongoose";

import { DB_NAME } from "./constants.js";  
import express from "express";
import connectToDatabase from "./db/index.js";
const app = express();


// dotenv.config({
//     path: "./.env"
// }); // Load environment variables from .env file

connectToDatabase()
    // Connect to MongoDB using the function from db/index.js










    



