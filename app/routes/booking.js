const express = require('express');
const request = require('request');
const flash = require('connect-flash');
const ObjectID = require('mongodb').ObjectID;
const router = express.Router();
const Booking = require('../models/booking');


function validate(data) {
	let errors = {};
	if (data.title === '') errors.title = "You cannot have an empty title";
	if (data.description === '') errors.description = "You cannot have an empty description URL";
	const isVal = Object.keys(errors).length === 0;
	return {
		errors,
		isVal
	};
}
//get booking
router.get('/booking/:id', (req, res) => {
	Booking.find(function (err, booking){
	 if(err){
		 console.log(err);
	 }
	 else {
		 res.json(booking);
	 }
 });
});

//add booking
router.post('/bookings', function(req, res) {
	var booking = new Booking(req.body);
	booking.save()
	 .then(item => {
	 res.status(200).json({'booking': 'booking added successfully'});
	 })
	 .catch(err => {
	 res.status(400).send("unable to save to database");
	 });
  
  });
	
		
		module.exports = router;