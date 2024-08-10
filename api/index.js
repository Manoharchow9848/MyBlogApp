import express from 'express'
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import connectdb from './db/mongodb.js';
dotenv.config();



const app = express();
app.use(express.json())
app.use('/api/user',userRoutes)
const port = 3000;
connectdb().then(()=>{
    app.listen(port,()=>{
        console.log(`app running on port ${port}`);
    })
})