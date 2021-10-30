import cors from "cors"
import express from "express"
import mongoose from "mongoose"

import Pusher from "pusher"

//app config

const app = express();
const port  = process.env.PORT || 8080;


//middleware
app.use(express.json())
app.use(cors())
//DB setup

const connection_url = 'mongodb+srv://teamagro:HelloWorld123.@cluster0.w6thk.mongodb.net/agroDB?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    
    useNewUrlParser: true,
    useUnifiedTopology: true

})

mongoose.connection.once("open", () => {
    console.log("DB connected")
})

//api routes
app.get("/", (req, res)=> res.status(200).send("Hello World!"));

//listener 
app.listen(port, () => console.log(`listening on localhost:${port}`))
