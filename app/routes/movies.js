const express = require('express');
const request = require('request');
const flash = require('connect-flash');
const ObjectID = require('mongodb').ObjectID;
const router = express.Router();
const Comments = require('../models/comments');
const Movies = require('../models/movie');
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
// get all movies
router.get('/movies', (req, res, next) => {
  request('https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&api_key=2931998c3a80d7806199320f76d65298', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body)
  });
});
// get movie by id
router.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  request('https://api.themoviedb.org/3/movie/' + id + '?&api_key=2931998c3a80d7806199320f76d65298', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body)
  });
});

//get all movie comments by id
router.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  request('https://api.themoviedb.org/3/movie/' + id + '/reviews?api_key=4d9c9de3bdf0d3b6837c49c086e3b190', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body)
  });
});
//add comments
router.post('/comments', function(req, res) {
  var comment = new Comments(req.body);
  comment.save()
   .then(item => {
   res.status(200).json({'comment': 'comment added successfully'});
   })
   .catch(err => {
   res.status(400).send("unable to save to database");
   });
  
});
//search your favourite movie
router.get('/search/:query', (req, res) => {
  const searchString = req.params.query;
  console.log("$$$$request string" + JSON.stringify(searchString));
  request('https://api.themoviedb.org/3/search/movie?api_key=2931998c3a80d7806199320f76d65298&language=en-US&query=' + searchString + '&page=1&include_adult=false', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body)
  });
});
//get movies in theatre
router.get('/theatre', (req, res) => {
  request('https://api.themoviedb.org/3/discover/movie?&primary_release_date.gte=2018-04-25&sort_by=popularity.desc&api_key=2931998c3a80d7806199320f76d65298' + '&page=1&include_adult=false', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body)
  });
});
//add movie by title
module.exports = function (database, router) {
  router.post('/movies', (req, res) => {
		console.log(req.body);
		request('https://api.themoviedb.org/3/search/movie?api_key=2931998c3a80d7806199320f76d65298&language=en-US&query=' + req.body.title + '&page=1&include_adult=false', function (error, response, body) {
			console.log("###response from api", JSON.parse(response.body).results[0]);
			const movieObj = JSON.parse(response.body).results[0];
			const {
				errors,
				isVal
			} = validate(req.body);
			if (isVal) {
				const {
					title
				} = req.body;
				console.log("$Title is", title);
				db.collection('movies').insert({
					movieObj
				}, (error, result) => {
					if (error) {
						res.status(500).json({
							errors: {
								global: "Oops something is right!"
							}
						});
					} else {
						res.json({
							show: movieObj
						});
					}
				})
			} else {
				res.status(400).json({
					errors
				});
			}
		});

	});
}


module.exports = router;
