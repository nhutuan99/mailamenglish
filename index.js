const express = require('express')


const app = express();


app.set('views','./views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{


    res.render('index');
    


});
app.use(express.static('public'));
app.listen(3000||process.env.PORT,()=>{
    console.log("app listen on");
})