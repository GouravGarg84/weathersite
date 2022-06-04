const express =require('express');
const path =require('path');
const app =express();
const port =process.env.PORT || 8000;

const static_path =path.join(__dirname,"../public");

app.set('view engine', 'hbs');


app.use(express.static(static_path));
 
app.get("",(req,res)=>{
    res.render('index')
})

app.get("/about",(req,res)=>{
    res.render('about')
})

app.get("/weather",(req,res)=>{
    res.render('weather')
})

app.get("/contact",(req,res)=>{
    res.render('contact')
})

app.get("*",(req,res)=>{
    res.render('404error',{
        errorMsg:'Oops! Page Not Found🤔'
    })
})


app.listen(port,()=>{
    console.log("server is running at port 8000 ")
})  