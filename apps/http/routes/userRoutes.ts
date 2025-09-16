import { Router } from "express";

const router = Router()

router.post("/signin",(req,res)=>{
    const { email , password } = req.body

    // store the data in db 

    res.status(200).json({
        msg: "you're logged in successfully"
    })
    
})

router.post("/signup",(req,res)=>{

})

export const userRoutes = router