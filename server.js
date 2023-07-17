//jshint esversion:6
import express from 'express'
const app = express()

app.listen(3000, ()=>{

    console.log("Server began on port : 3000")
})

app.get("/", (request, response)=>{

    response.send("hello")})