import bycrpt from "bcrypt";
import User from "../models/User.js";
import jwt from 'jsonwebtoken'

const generateToken=(userId)=>{
    const token=jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:'7d'})
    return token;
}

//Controller for user registration
//POST: api/users/register

export const registerUser = async (req,res)=>{
    try {
        const {name,email,password}=req.body;

        if(!name || !email || !password){
            return res.status(400).json({message:"Missing required field"})
        }

        //check if data already exists
        const user= await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }

        //create new user
        const hashedPassword=await bycrpt.hash(password,10)
        const newUser=await User.create({
            name,email,password:hashedPassword
        })

        //return success message
        const token = generateToken(newUser._id)

        newUser.password = undefined;

        return res.status(201).json({
            message: 'User created successfully',
            token,
            user: newUser
        })
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}


//Controller for user login
//POST: api/users/login

export const loginUser = async (req,res)=>{
    try {
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({message:"Missing required field"})
        }

        //check if user exists
        const user= await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Inavlid email or password"})
        }

        if(!user.comparePassword(password)){
            return res.status(400).json({message:"Inavlid email or password"})
        }

        //return success message
        const token = generateToken(User._id)
        User.password = undefined;

        return res.status(200).json({
            message: 'Login successfully',
            token,
            user
        })
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}
