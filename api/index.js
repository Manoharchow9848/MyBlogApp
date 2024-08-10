import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectdb from './db/mongodb.js';
dotenv.config();



const app = express();
app.use(express.json())

const port = 3000;
connectdb().then(()=>{
    app.listen(port,()=>{
        console.log(`app running on port ${port}`);
    })
})