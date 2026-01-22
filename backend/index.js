require('dotenv').config();
const express=require('express');
const { default: mongoose } = require('mongoose');
const app=express();


const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connected successfully');
    }
    catch(err){
        console.error('Database connection failed',err);
    }
}


// Middleware

app.get('/',(req,res)=>{
    res.send('Hello World!');
});
app.listen(process.env.port,()=>{
    connectDb();
    console.log(`Server is running on http://localhost:${process.env.port}`);
});