import { booking } from "../models/booking_model.js";


export const getAllBookings = (req, res) => {
    res.status(200).json("These are all bookings");
}

export const getOneBooking = (req, res) => {
    res.status(200).json("Get one booking");
}

export const postBooking = async (req, res) => {
    const newBooking = await new booking()
    
    const bookings = newBooking.save(req.body)

    res.status(201).json(booking);
}

export const updateBooking = (req, res) => {
    res.status(200).json("Your booking has been updated");
}

export const deleteBooking = (req, res) => {
    res.status(200).json("Your booking has been deleted");
}