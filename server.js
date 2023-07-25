const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
mongoose.connect("mongodb+srv://ash22kk:ash22ash@cluster0.t6o3utk.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true});
const db=mongoose.connection ;

db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log("connected to Database"));
app.use(cors());
const quoteRouter=require('./routes/quote');

app.use('/quote',quoteRouter);


app.listen(5050,()=>console.log('sever started'));

    