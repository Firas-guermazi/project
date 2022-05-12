const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken')
const userSchema=require('../models/users')
const roleSchema = require('../models/role')

//sign up
exports.authSignUp= async (req, res) => {
const {password,email,age,fullname,role} = req.body
try {
const find = await userSchema.findOne({email:email});
if (find){
    res.status(400).send({msg:'user already exists'})
}
if(req.body.role){
    const idRole = await roleSchema.findOne({post: req.body.role})
    req.body.role = [idRole._id]
 }
const user = new userSchema(req.body)
const salt = 10;
const passwordHached = bcrypt.hashSync(password, salt)
const userID ={id:user._id}
const token =jwt.sign(userID, process.env.SECRET_OR_KEY);
user.password = passwordHached;

await user.save();
res.status(200).send({msg: 'registred successfully', token})
} catch (error) {res.status(400).send({msg:'error'})}
}
// pour affecter a un novel utilisateur un role, on va extraire l'id du role (dans schema du role dans le model) a partir du post qui est choisi
//sign in
exports.authSignIn =async (req, res) => {
const {email, password} = req.body;
try {
const find = await userSchema.findOne({email:email});
// to get the name of the role by id
const roles = await roleSchema.findById(find.role[0])
if (!find){
res.status(400).send({msg:"user not exist"})
}
const match = bcrypt.compareSync(password, find.password)
console.log(match)
if (!match){   
res.status(400).send({msg:"bad credentials"})
}
// add the role inside the tokem using role:roles.post
const userID ={id:find._id,role:roles.post}
const token =jwt.sign(userID, process.env.SECRET_OR_KEY);
res.status(200).send({msg:"loggin successfully",token})
} catch (error) {
}
}