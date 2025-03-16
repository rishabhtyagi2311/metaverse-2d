import express from 'express'

import { router } from './routes/index.js'


const app = express()

app.use(express.json())


app.use("/api/v1" , router)









app.listen(3000 , () => {
    console.log("app is listening on port 3000");
    
})

