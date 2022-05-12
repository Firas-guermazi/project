const express =require('express') 
const route = express.Router()
const user = require('../config/models/user')


route.post('/', async (req,res)=>{

    
try {
    const Addeduser = new user(req.body)
    await Addeduser.save()
    res.status(200).send({msg:'added user with sucess',Addeduser})
} catch (error) {
    res.status(500).send({msg:'error could not save a user'})
}


})

module.exports = route