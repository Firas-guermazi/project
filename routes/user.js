const express = require('express');
const user=require('../config/models/user')
const router=express.Router()




router.get('/user', (req,res)=>{
    res.send(user)
})

router.get('/user/:id', (req,res)=>{
    res.json(user.filter(user=>user.id===parseInt(req.param.id)))
})

router.delete('user/:id', (req,res)=>{
    res.json(user.filter(user=>user.id!==parseInt(req.param.id)))
})
router.post('/user', (req,res)=>{
    res.send(user.concat(req.body))
})
router.put('/user/:id',(req,res)=>{
    res.json(user.map(el=>el.id===parseInt(req.param.id) ? {...req.body, id : el.id} : el))
})

module.exports=router