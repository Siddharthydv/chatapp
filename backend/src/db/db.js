import mongoose from "mongoose"
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://siddharth:saumya%4052@chatapp.fsv5eoc.mongodb.net/?retryWrites=true&w=majority&appName=chatapp");
        console.log(`\n MongoDB connected !! `);
        }catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB