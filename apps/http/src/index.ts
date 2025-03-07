import express from 'express'
import client from "@metaverse/db/client"
import { router } from './routes'


const app = express()

app.use(express.json())


app.use("/api/v1" , router)









app.listen(3000 , () => {
    console.log("app is listening on port 3000");
    
})

