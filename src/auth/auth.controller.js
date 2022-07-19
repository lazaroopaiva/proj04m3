require("dotenv").config();
const authService = require('./auth.service');
const bcrypt = require('bcryptjs')

const logInController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.logInService(email)


  if (!user) {
    return res.status(400).send({message: 'Usuário não existe'})
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);

  if (!passwordIsValid) {
    return res.status(400).send({message: 'Senha inválida'})
  }

  const token = authService.generateToken(user.id)
  res.send({token: token});

}

module.exports =  {logInController}
 

