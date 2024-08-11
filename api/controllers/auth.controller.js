import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
export const signup = async(req,res,next)=>{
    const {username,email,password} = req.body
    if (
        !username ||
        !email ||
        !password ||
        username === '' ||
        email === '' ||
        password === ''
      ){
      next(errorHandler(400,"All fields are required"))
      }
      const userExist = await User.findOne({username});
       
        

        const hashedPassword = await bcryptjs.hash(password,10);
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
        })
        try {
            await newUser.save();
            res.json('Signup successful');
          } catch (error) {
            next(error);
          }
    
     
}

export const signin = async(req,res,next)=>{
    const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All fields are required'));
  }

  try {
      const validUser = await User.findOne({email});
      if(!validUser){
        return next(errorHandler(404, 'User not found'));
      }
      const validPassword = bcryptjs.compare(password,validUser.password);
      if(!validPassword){
        return next(errorHandler(400, 'Invalid password'));
      }
      return res.json("signin successfull")
  } catch (error) {
    next(error);
  }

}

export const google = async(req,res,next)=>{
    res.json('google successful');
}