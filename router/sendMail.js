const express = require('express')
const {send} = require('../services/mail');
const form = require('../services/form');
const { Router } = require('express');




const router = express.Router();


router.post('/',async(req,res)=>{
    const info={
        name:req.body.name,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        messenge:req.body.message
    }
    await send('anhngumailamcrazy@gmail.com','CÓ HỌC VIÊN',form.email(info.name,info.email,info.phoneNumber,info.messenge))
})