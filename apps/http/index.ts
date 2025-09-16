import express from "express"
import { adminRoutes } from "./routes/adminRoutes";
import { userRoutes } from "./routes/userRoutes";
import { contest } from "./routes/contest"

const app = express()
app.use(express.json())

app.use("/user",userRoutes);
app.use("/admin",adminRoutes);
app.use("/contest",contest);

app.listen(process.env.PORT && 8000,()=>{
    if(!process.env.PORT){
        console.log("server is running on port 8000")
    }
    else{
        console.log("server is running on port " + process.env.PORT)
    }
})