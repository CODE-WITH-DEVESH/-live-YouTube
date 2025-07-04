import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUND_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
  });

  // Upload an image
  
}

)();


const uploadCloundinary = async(localFilePath) =>{
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload
        (localFilePath ,{
            resource_type :"auto"

        })
        console.log("file is uploaded on cloundinary",response.url)
        return response

    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
        
    }
}

export {uploadCloundinary}