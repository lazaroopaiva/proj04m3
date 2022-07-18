const userService = require('./users.service')
const authService = require('../auth/auth.service')

const createUserController = async (req, res) => {
  const {username, name, email, password, avatar} = req.body;

  if (!username ||
    !name ||
    !email ||
    !password ||
    !avatar) {
      return res.status(400).send({message: 'Complete all fields to create new user'})
    }

    const validUser = await userService.findByEmailUserService(email)

    if (validUser) {
      return res.status(400).send({message: 'User exists in database'})
    }

    const user = await userService.createUserService(req.body).catch((err) => console.log(err.message))

    if (!user) {
      return res.status(400).send({message: 'Error user has been exist'})
    }

    const token = authService.generateToken(user.id);

    res.status(201).send({
      user: {
        id: user.id,
        name,
        username,
        email,
        avatar,
      },
      token,
    })
};
const findUserController = async (req, res) => {
  const users = await userService.findAllUserService();

  if (users.length === 0) {
    return res.status(401).send({message: 'Do not Exist users'});
  }

  res.send(users)
};

module.exports = {createUserController, findUserController};

