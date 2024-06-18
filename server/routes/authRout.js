const express=require('express'); 
const { signupController, loginController, myporfileController, updateController } = require('../controller/authController');
// const authMiddleware=require("../middleware/middleWare");
const authMiddleware=require('../middleware/middleWare')
const route=express.Router();

route.post("/signup",signupController);
route.post("/login",loginController)

// route.get("/myprofile",authMiddleware,myporfileController);
// route.put('/myprofile/updated',authMiddleware,updateController)


module.exports=route;

