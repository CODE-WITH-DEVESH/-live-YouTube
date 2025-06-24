import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";  // .js lagana zaroori ho sakta hai, depending on module type

const connectToDatabase = async () => {
    try{
      const connect=  await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, )
        console.log(`Connected to MongoDB at ${connect.connection.host}`);


    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        // throw error;
        process.exit(1); // Exit the process with failure
    }
}

export default connectToDatabase;