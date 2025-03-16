import  Jwt  from "jsonwebtoken";
import { AT_PASSWORD, RT_PASSWORD } from "../config.js";

export const  generateAccessoken = (id: number, username : String) => {

    return  Jwt.sign({id, username} , AT_PASSWORD)
   

}
export const generateRefreshToken = (id: number, username : String) =>{
    return  Jwt.sign({id, username} , RT_PASSWORD)
}