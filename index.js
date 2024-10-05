const express= require('express');
const path = require('path');
app= express()


app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/cats',(req,res)=>{
    const cats=['abby','queen',"jass"]
    res.render('cats',{ cats: cats})
})
app.set('view engine','ejs');

app.set('views',path.join(__dirname,'/views'));

app.get('/random',(req,res)=>{
    const num= Math.floor(Math.random()*10)+1
    res.render('random',{rand:num})
})

app.listen(3000,()=>{
    console.log("App is listening at port 3000")
})
