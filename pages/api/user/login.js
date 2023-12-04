import connectDB from "@/db";
import User from '@/models/user-model'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export default async function handler(req, res){
    
    if (req.method === "POST") {
        connectDB();
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({msg:"Enter All Details"})
        };
        const emailExist = await User.findOne({ email });
        if (!emailExist) {
            return res.status(400).json({msg:"Email is not Registered"})
        }
        const passwordMatched =await bcrypt.compare(password, emailExist.password);
        if (!passwordMatched) {
            return res.status(400).json({msg:"Invalid Credential"})
        };
        const token = jwt.sign({ token: emailExist._id }, "Code_AJ", {
            expiresIn: "30d",
        });
        res.status(200).json({msg:"Logged In Successful",token})

    }
}