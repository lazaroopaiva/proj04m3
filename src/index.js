const express = require('express');
const cors = require('cors');
const route = require('./routes/route');
const connectToDatabase = require('./database/db');

const userRoute = require('./users/users.route');
const authRoute = require('./auth/auth.route');
const swaggerRoute = require('./swagger/swagger.route')


const port = 3001;

const app = express();
connectToDatabase();


app.use(cors());
app.use(express.json());
app.use('/characters', route);
app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/api-docs', swaggerRoute)



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
