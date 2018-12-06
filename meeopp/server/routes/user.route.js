const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController/userProfileDetails');
// routes of MeeOpp
router.post('/userProfileDetails', userController.saveUserProfileDetails);
router.post('/getUserDetails', userController.getUserProfileDetails);

// export this router to use in our server.js
module.exports = router;
