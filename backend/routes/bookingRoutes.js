const express=require("express");

const router=express.Router();

const bookingController=require("../controllers/bookingController");

// Get all bookings

router.get("/bookings",bookingController.getBookings);

// Create booking

router.post("/bookings",bookingController.createBooking);

// Cancel booking

router.put("/bookings/cancel/:id",bookingController.cancelBooking);

module.exports=router;