const express=require('express');
const bodyParser=require('body-parser');
const router=require('./routes/router')
const app=express();
const PORT=3000;
app.use(bodyParser.json());
app.use('/data',router);


app.listen(PORT,()=>{
    console.log("Server is start");
})