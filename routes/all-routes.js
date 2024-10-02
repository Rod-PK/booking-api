import { Router } from "express";
import { deleteBooking, getAllBookings, getOneBooking, postBooking, updateBooking } from "../controllers/booking_controllers.js";

// create a router
export const bookingRouter = Router();

// define routes
bookingRouter.get("/bookings", getAllBookings)

bookingRouter.get("/bookings/:id", getOneBooking)

bookingRouter.post("/bookings", postBooking)

bookingRouter.patch("/bookings/:id", updateBooking)

bookingRouter.delete("/bookings/:id", deleteBooking)