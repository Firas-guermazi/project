const express = require('express');
const auth = express.Router();


const {authSignIn , authSignUp,}= require('../controllers/users.controller') 
const {addNewTrainig, displayTrainings, deleteTraining}= require('../controllers/training.controller') 
const {addNewCalender}= require('../controllers/calender.controller') 
const {isValid, validationSignIn, validationSignUp} = require('../middleware/validation')
const {isAuth} = require('../middleware/isAuth')
const {offer, deletePersons, displayPersons }= require('../controllers/offer.controller')


auth.post('/signup', isValid, validationSignUp, authSignUp )
auth.post('/signin',  isValid, validationSignIn, authSignIn)
auth.post('/addtrainig', addNewTrainig)
auth.get('/listtrainings', displayTrainings)
auth.post('/addcalender', addNewCalender)
auth.get("/current", isAuth,(req, res) => {res.send(req.user)});
auth.post('/offer', offer)
auth.get('/displayPersons', displayPersons)
auth.delete('/offer/:ID', deletePersons)


module.exports = auth