require('dotenv').config(); 
const express=require('express')
const app=express();
const router=require('./router/auth-router')
const connectDb=require('./utils/db')
app.use(express.json());

app.use('/api/auth',router);
app.post('/register',(req,res)=>{
  
    res.status(200).send('welcome to registration page ')
})
const PORT=process.env.PORT || 3000;
connectDb().then(()=>{


app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})
})