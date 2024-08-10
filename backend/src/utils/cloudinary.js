import {v2 as cloudinary} from "cloudinary"

export const uploadfile=async(localfilepath)=>{
    cloudinary.config({ 
        cloud_name: 'dailn0eip', 
        api_key: '396123574791191', 
        api_secret: '2MzdrCUgGQ1uTqKxJWOr2f4S_tI' // Click 'View Credentials' below to copy your API secret
    });
    const uploadResult = await cloudinary.uploader
    .upload(localfilepath)
    .catch((error) => {
        console.log(error);
    });
    return uploadResult
}