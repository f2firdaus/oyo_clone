import User from '@/models/user-model'
import connectDB from "@/db";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
// import { NextResponse } from 'next/server';
export default async function handler(req, res) {
    if (req.method === "POST") {
        connectDB();
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ msg: "All field Mandetory" })
        }
        const emailExist = await User.findOne({ email: email });
        if (emailExist) {
            return res.status(400).json({ msg: "User Registered already" })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser =  new User({
            name,
            email,
            password: hashPassword,
        });
        const result = await newUser.save();
        const token = jwt.sign({ token: result._id }, 'Code_AJ', { expiresIn: '30d' });
        return res.status(201).json({ msg: "Registered Successfull", token });
        
        
    }
   
}