import { Router } from "express";
import { signinSchema, signUpSchema } from "../types/index.js"
import bcrypt from "bcrypt"
import client from "@metaverse/db/client";
import { generateAccessoken, generateRefreshToken } from "../helpers/tokens.js";


export const router : Router = Router()


router.post('/signup', async (req,res)=>{
        const parsedData = signUpSchema.safeParse(req.body)

        if(!parsedData.success)
        {
            res.status(400).json({message:"Validation failed"})
            return 
        }
        try{


            const existUser = await client.default.user.findFirst({
                where: {
                    username : parsedData.data.username
                }
            })

            if(existUser)
            {
                res.status(400).json({message : "User Already exists"})
                return 
            }

            const hashedPassword = await bcrypt.hash(parsedData.data.password,10)

            const user = await client.default.user.create({
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
            console.log(e)
            res.status(500).json({message: "SignUp Failed"})
            return 
        }
})


router.post('/signin' , async (req, res)=> {


    const parsedData = signinSchema.safeParse(req.body)
    if(!parsedData.success)
    {
        res.status(400).json({message :"Validation Failed"})
        return 
    }
    try{

        const user = await  client.default.user.findFirst({
            where:{
                username  : parsedData.data.username
            }
        })
        if(user)
        {
            const valid = await bcrypt.compare(parsedData.data.password, user.password)
            if(valid)
            {
                const accessToken = generateAccessoken(user.id, user.username)
                const refreshToken = generateRefreshToken(user.id, user.username)
                res.status(200).json({
                    id: user.id,
                    username : user.username,
                    accessToken : accessToken, refreshToken : refreshToken })
                return 
            }

            
            
        }
        else{
            res.status(403).json({message: "Invalid Credentials"})
            return 
        }
    }
    catch(e)
    {
        res.status(500).json({message: "Cannot Sign in "})
        return 
    }


})     