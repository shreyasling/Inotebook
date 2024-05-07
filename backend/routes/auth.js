const express = require('express');
const User =require('../models/User');
const router =express.Router();
const { body, validationResult } = require('express-validator');


//create a user using post "/api/auth"
router.post('/',[body('email').isEmail(),
    body('name').isLength({ min: 3 })],
    body('password').isLength({ min: 5 }),
        async(req,res)=>{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
            }
            //check whether duplicate email exist or not
           let user= await User.findOne({email:req.body.email});
           if(user){
            return res.status(400).json({email:"Sorry user already exists"})
           }
           user = await User.create({
                name: req.body.name,
                password: req.body.password,
                email:req.body.email,
              })
              
              // .then(user => res.json(user))
              // .catch(err=>{console.log(err)
              // res.json({error:'Please enter unique value for email',message :err.message})})
            // res.send(req.body)
            res.send({"nice":"nice"});
})
module.exports =router;