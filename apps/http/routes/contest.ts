
import { Router } from "express";

const router = Router()

// http://localhost:8000/constest/active?offset=20&page=20
router.get("/active",(req,res)=>{
    
})

router.get("/finished",(req,res)=>{
    const { offset, page } = req.query

})

router.get("/:constestId/:challengeId",(req,res)=>{
    const constestId = req.params.constestId

})

router.get("/leaderboard/:contestId",(req,res)=>{

})

router.post("/submit/:challegneId",(req,res)=>{
    
})

export const contest = router
