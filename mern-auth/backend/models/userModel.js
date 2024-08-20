const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }

}, { timestamps: true })


// Static Signup method
userSchema.statics.signup = async function(email, password) {
  // validate
  if (!email || !password) {
    throw Error("All fields must be filled")
  }

  if (!validator.isEmail(email)) {
    throw Error("Not a valid email")
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Not a strong password")
  }
  // check if email exists first
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already exists")
  }

  const salt = await bcrypt.genSalt(10)

  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash })

  return user

}


// Static login method
userSchema.statics.login = async function(email, password) {
  // validate
  if (!email || !password) {
    throw Error("All fields must be filled")
  }


  // find user with that email
  // check if email exists first
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email")
  }

  // match password with hashed one
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Incorrect password')
  }


  return user



}

module.exports = mongoose.model('User', userSchema)
