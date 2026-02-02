const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const multer = require('multer');

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


//image upload
const fs = require("fs");
const path = require("path");

if (!fs.existsSync("images")) {
  fs.mkdirSync("images");
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, 'image1.jpg');
  },
});

const upload = multer({ storage });


app.use("/images", express.static("images"));

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.status(200).json({
    message: "File uploaded successfully",
    filename: req.file.filename,
    path: `/images/${req.file.filename}`,
  });
});







app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});