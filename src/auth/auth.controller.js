require("dotenv").config();
const authService = require('./auth.service');
const bcrypt = require('bcryptjs')

const sessionController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.sessionService(email)


  if (!user) {
    return res.status(400).send({message: 'User do not exists'})
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);

  if (!passwordIsValid) {
    return res.status(400).send({message: 'Invalid Password'})
  }

  const token = authService.generateToken(user.id)
  res.send({token: token});

}

module.exports =  {sessionController}
 

