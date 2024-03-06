"use server"
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    // const connectionState = mongoose.connection.readyState;

    // if(connectionState === 1){ // Connected
    //     return;
    // }

    // if(connectionState === 2){ // Connecting...
    //     return;
    // }

    try {
        mongoose.connect(MONGODB_URI!, {
            dbName: "ictgfinance",
            bufferCommands: false
        });
        console.log("Connected!");
    } catch (error) {
        console.log("Error in connecting to database", error);
        throw new Error("Error connecting to database");
    }
};

export default connect;
