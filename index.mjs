import express from 'express';
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.set('views','./views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{


    res.render('index');
    


});
app.use(express.static('public'));
app.listen(process.env.PORT,()=>{
    console.log("app listen on");
})