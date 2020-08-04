import nodemailer from 'nodemailer';
async function send(to,subject,content){
const transporter =nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user:process.env.USER_NAME,
        pass:process.env.PASSWORD,
    }
});


return transporter.sendMail({
    from :process.env.USER_NAME,
    to,
    subject,
    html:content,
}).then(console.log).catch(console.error);
}
module.exports ={send};