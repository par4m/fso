const User = require('../models/userModel')

const jwt = require('jsonwebtoken')
// login user
//
//
//


// id is _id in mongo
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

const loginUser = async (req, res) => {
  //get email , pwd from body
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password)

    // create createToken
    const token = createToken(user._id)
    console.log(token)
    res.status(200).json({ email, token })

  } catch (error) {
    res.status(400).json({ error: error.message })

  }

}

// signup user
const signUser = async (req, res) => {
  //get email , pwd from body
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password)

    // create createToken
    const token = createToken(user._id)
    console.log(token)
    res.status(200).json({ email, token })

  } catch (error) {
    res.status(400).json({ error: error.message })

  }
}


module.exports = { signUser, loginUser }
