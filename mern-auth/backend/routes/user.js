const express = require('express');

// controller functions
const { loginUser, signUser } = require("../controllers/userController")

// express router
const router = express.Router()


// login route
//
router.post('/login', loginUser)


// signup route
router.post('/signup', signUser)

module.exports = router
