const express=require('express');
const path=require('path');
const hbs=require('hbs');
const port=process.env.PORT || 8000;
const app=express();
const staticpath=path.join(__dirname,'../public');
const viewpath=path.join(__dirname,'../templates/views');
const partialspath=path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views',viewpath);
hbs.registerPartials(partialspath);
//add static in app:
app.use(express.static(staticpath));

//home page
app.get('/',(req,res)=>{
    res.render('index.hbs');
});

//about page
app.get('/about',(req,res)=>{
    res.render('about.hbs');
});

//weather page
app.get('/weather',(req,res)=>{
    res.render('weather.hbs');
});

app.get('*',(req,res)=>{
    res.render('404.hbs');
});

app.get('/about/*',(req,res)=>{
    res.render('404.hbs');
});

app.get('/weather/*',(req,res)=>{
    res.render('404.hbs');
});



app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('listining port 3000');
    }
});