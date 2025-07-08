console.log("Hello World");
// **Purpose**: Imports the **Express framework**, which is used to build the web server and APIs.
// - You’ll use it to define routes, middleware, and listen on a port.
import express from "express";
// **Purpose**: Loads environment variables from a `.env` file into `process.env`
// - Useful for storing sensitive data like:
import dotenv from "dotenv";

// : Middleware to parse cookies from the request headers and make them accessible in `req.cookies`
// - Used for **auth tokens, sessions**, or preferences stored in cookies
import cookieParser from "cookie-parser";
import path from "path";
import  cors from "cors";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import contractRoutes from "./routes/contractRoutes.js";
import contractFarmRoutes from "./routes/contractfarmRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js";
// import diseaseDetection from "./routes/diseaseDetection.js";
dotenv.config();
connectDB();
// Middleware functions are executed before your routes and are used to process incoming requests.
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
   origin: 'http://localhost:5173', // or '*' if you want all origins
   credentials: true
 }));
 app.use('/uploads', express.static('uploads'));

//routes
app.use("/api/v1/users",userRoutes);
app.use("/api/v1/contractfarm",contractFarmRoutes);
app.use("/api/v1/contract", contractRoutes);
app.use("/api/v1/wishlist",wishlistRoutes);
// app.use("/api/detect", diseaseDetection);
app.get("/", (req, res) => {
   res.send("API is running...");
 });
 

const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  
 }); 
