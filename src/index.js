import express from 'express'
import env from 'dotenv'
env.config()
const app=express()

app.get('/',(req,res)=>{
    res.json({
        'message':'server runs docker image',
        'body':'node app for docker testing',
        'alpha':'this is initial version'
    })
})

app.listen(3000,()=>{
    console.log(`server started at port 3000`)
})