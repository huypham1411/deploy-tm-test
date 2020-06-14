const router = require('express').Router();
const User=require('../model/User');
const Social=require('../model/Social');
const {registerValidation,loginValidation} =require('../validation.js');
const jwt=require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const verify = require('./verifyToken');
//Register
router.post('/SignUp',async (req,res)=>{
   //Validate
   const {error} = registerValidation(req.body);
   if(error) {return res.status(400).send(error.details); }

   //Checking if user already in database
   const emailExist=await User.findOne({email:req.body.email})
   if(emailExist){return res.status(400).send([{'message':'Email exist'}])}

   //Hash password
   const salt = await bcrypt.genSalt(10);
   const hashPassword= await bcrypt.hash(req.body.password,salt);
   //Create new user
   const user=new User({
      name:req.body.name,
      email:req.body.email,
      password:hashPassword,
      phonenum:req.body.phonenum,
      address:req.body.address
   })
   try {
      const saveUser=await user.save();
      res.send({user:user._id});
   } catch (error) {
      res.status(404).send(error);
   }
})

//Login
router.post('/login',async (req,res)=>{
   //Validate
   const {error} = loginValidation(req.body);
   if(error) {return res.status(400).send(error.details);}
   //Checking if user already in database
   const user=await User.findOne({email:req.body.email})
   if(!user){return res.status(400).send([{'message':'Email or password is wrong!'}])}
   //Check password
   const validPassword=await bcrypt.compare(req.body.password,user.password);
   if(!validPassword){return res.status(400).send([{'message':'Email or password is wrong!'}])}
   //Create and assign token
   const token=jwt.sign({name:user.name,id:user._id},process.env.TOKEN_SECRET)
   res.header('auth-token',token).status(201).send({name:user.name})
})

router.get('/login',async(req,res)=>{
   const token=req.header('auth-token');
   const user = jwt.decode(token);
   res.status(201).send(user);
})


router.post('/social',async (req,res)=>{

   //Checking if user already in database
   const emailExist=await Social.findOne({email:req.body.email})
   if(emailExist){return res.status(400).send({message:'Account exist'})}
   //console.log(req.body)
   const social=new Social({
      id: req.body.id,
      name:req.body.name,
      email:req.body.email,
      address:req.body.address,
      avatar:req.body.avatar,
      role:req.body.role
   })
   try {
      const saveSocial=await social.save();
      res.send({
         social:social._id,
         status: 'success'
      });
   } catch (error) {
      res.status(404).send(error);
   }
})

router.get('/user/:id',async (req,res)=>{
   const id= req.params.id;
   try{
     const user= await Social.findOne({id:id})
     res.status(201).send(user);
   }
   catch(err){res.status(404).send(err)}
 })

module.exports =router;
