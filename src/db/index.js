import mongoose from "mongoose";
import { PRO_DB } from "../constants";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.
            MONGODB_URL}/${PRO_DB}`)
        console.log(`\n MongoDB connected !! DB Host:  ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error ", error);
        process.exit(1)
    }
}

export default connectDB; 