const express = require("express")
const dotenv = require("dotenv")
const { connectionToDb } = require("./config/dbConnection")
const cookieParser = require("cookie-parser")
const { router:usreRouter } = require("./routes/userRotues")
dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()


connectionToDb(process.env.MONGODB_URI).then(()=>{
    console.log("db connected")
})

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use("/user",usreRouter)

app.listen(PORT,()=>{
    console.log("server running on port")
})