const jwt = require ('jsonwebtoken');
const userSchema=require('../models/users')
const roleSchema = require('../models/role')
exports.isAuth  = async(req, res, next)=>{
const token =req.header('authorization')
// .split(' ')[1]

try {
if(!token){
return res.status(400).send({msg:"not authorized"})
}
const decoded = jwt.verify(token, process.env.SECRET_OR_KEY)
if(!decoded){
return res.status(400).send({msg:"not authorized"})
}
const user = await userSchema.findById(decoded.id)

role = await roleSchema.findById(user.role[0])
user.role = [role]
req.user=user;
next();
} catch (error) {
res.status(500).send({msg:error})
}
}