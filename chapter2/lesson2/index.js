const express=require("express")

const app=express()

app.listen(3000,()=>{
    console.log("Server Listening on port 3000");
})


app.use((req,res)=>{
    res.end("hello world")
})