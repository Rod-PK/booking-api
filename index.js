import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import { bookingRouter } from "./routes/all-routes.js";

// Connect to database
await mongoose.connect(process.env.MONGO_URI)

// Create an express app
const app = express();

// Define routes
// app.get("/booking", function (req, res, next) {
//     // console.log(req.headers);
//     res.json("Get all bookings");
// });
app.use(express.json())
app.use(bookingRouter)
 
// Listen for incoming requests
app.listen(3001, function () {
    console.log("App is listening on port 3001");
});