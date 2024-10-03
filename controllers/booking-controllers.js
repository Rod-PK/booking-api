import { BookingModel } from "../models/booking-model.js";


export const getAllBookings = (req, res, next) => {
    res.status(200).json("These are all bookings");
}

export const getOneBooking = (req, res, next) => {
    res.status(200).json("Get one booking");
}

export const postBooking = async (req, res, next) => {

    try {
        await BookingModel.create(req.body)


        res.status(201).json("Booking successful");
    } catch (error) {
        next(error)

    }
}

export const updateBooking = (req, res, next) => {
    res.status(200).json("Your booking has been updated");
}

export const deleteBooking = (req, res, next) => {
    res.status(200).json("Your booking has been deleted");
}