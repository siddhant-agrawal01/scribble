import express from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";

const app = express();


app.post("/signin",(req,res)=>{
JWT_SECRET
})

app.post("/signup",(req,res)=>{
    
})
app.get("/room",middleware,(req,res)=>{
    
})
app.listen(3000)