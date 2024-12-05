import User from '../Models/userModel.js';
import { errorhandler } from '../utils/errorhandler.js';
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
      if(!username|!email||!password){
        return next (errorhandler(400,'All fields are required'));
      }
      const userExists=await User.findOne({email})
      if(userExists){
        return next(errorhandler(400,`User with the email ${email} already exists`))
      }
      const hashPassword=bcrypt.hashSync(password,10)
      const user=await User.create({
        username,
        email,
        password:hashPassword
      })
      if(!user){
        return next(errorhandler(500,"Error creating user"))
      }
      await user.save();
      user.password=undefined
      
  
      // const token=await user.generateJWTToken()
      // res.cookie('token',token,cookieOptions)
      res.status(400).json({
        success:true,
        message:"User Created successfully",
        user
      })
    } catch (error) {
      return next(errorhandler(400,error.message));
    }
  };
  
  export const Signin=async(req,res,next)=>{
    const{email,password}=req.body
      try{
        if(!email||!password){
          return next(errorhandler(400,"All fields are required"))
        }
        const user=await User.findOne({email}).select('+password')
        if(!user||!bcrypt.compareSync(password,user.password)){
          return next(errorhandler(400,"Invalid Email or Password"));
        }
        const token=jwt.sign({id:user._id,email:user.email},process.env.SECRET);
          const {password:pass,...rest}=user._doc
          res.cookie('token',token,{httpOnly:true}).status(200).json(rest);
       
        res.status(200).json({
          success:true,
          message:"User logged in successfully",
          user
        })
      }catch(e){
        return next(errorhandler(400,e.message))
  
      }
  }
  
  export const signout = async (req, res, next) => {
    try {
      res.clearCookie('token');
      res.status(200).json('User has been logged out!');
    } catch (error) {
      next(error);
    }
  };
  