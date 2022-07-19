const User = require('../users/User')
const jwt = require('jsonwebtoken')
const authConfig = require('./auth.config')


const logInService = (email) => User.findOne({ email: email }).select("+password");

const generateToken = (userId) => {
  return jwt.sign({id: userId}, authConfig.secret, {expiresIn: authConfig.expiresIn})
}
module.exports = { logInService , generateToken };
