const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
const connectDb = require('./db');
console.log("JWT_SECRET:", process.env.JWT_SECRET);
connectDb();
const authRoute = require('./routes/auth');
app.use('/api/auth', authRoute);
const usersRoute = require('./routes/users');
app.use('/api/users', usersRoute);
const postRoute = require('./routes/posts');
app.use('/api/posts', postRoute);
const commentRoute = require('./routes/comments');
app.use('/api/comments', commentRoute);







app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});