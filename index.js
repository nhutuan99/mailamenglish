const express = require ('express');
const dotenv =require( "dotenv");
const bodyParser = require('body-parser');
const {send} = require('./services/mail');
const form = require('./services/form');
dotenv.config();
const app = express();
app.set('views','./views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/',bodyParser.urlencoded({ extended: false }),async(req,res)=>{
    console.log("submit");
    // const info={
    //     name:req.body.name,
    //     email:req.body.email,
    //     phoneNumber:req.body.phoneNumber,
    //     messenge:req.body.message
    // }
    //     await send('anhngumailamcrazy@gmail.com','CÓ HỌC VIÊN',form.email(info.name,info.email,info.phoneNumber,info.messenge));
    //     return res.render('index');
})
app.use(express.static('public'));

app.listen(process.env.PORT,()=>{
    console.log(`app listen on 3001`);
})