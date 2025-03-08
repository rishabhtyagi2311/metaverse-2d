import { Router } from "express";
import { signUpSchema } from "../types";
import bcrypt from "bcrypt"
import client from "@metaverse/db/client"

export const router : Router = Router()


router.post('/signup', async (req,res)=>{
        const parsedData = signUpSchema.safeParse(req.body)

        if(!parsedData.success)
        {
            res.status(400).json({message:"Validation failed"})
            return 
        }
        try{
            const hashedPassword = await bcrypt.hash(parsedData.data.password,10)

            const user = await client.user.create({
                data: {
                    username : parsedData.data.username,
                    password : hashedPassword,
                    email : parsedData.data.email
                }
            })

            if(!user)
            {
                res.status(500).json({message : "Cannot Sign up"})
                return 
            }

            res.status(200).json({message: "SignUp Success"})
            return 
        }
        catch(e)
        {
            res.status(500).json({message: "SignUp Failed"})
            return 
        }


})


router.post('signin' , async (req, res)=> {


})