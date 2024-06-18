
const userModel=require('../models/authModel')
const bcrypt =require("bcrypt");
const JWT=require('jsonwebtoken');



exports.signupController=async(req,res)=>{  
        
      try {  
        console.log(req.body, "cheking req.body")

      const { name,email,password,phone   }=req.body; 

          if(!email || !password || !phone ){
              return res.status(400).json({
                success:false,
                message:"Please provide all details !"

              })
          }

          const hashPassword=await bcrypt.hash(password,10) ;
          console.log("checking hasPassword",hashPassword);

           //creating user 
              
            const newUser=await userModel.create({ name,email,password:hashPassword, MobileNumber:phone });
              
               console.log("checking created user" ,newUser) ;

               res.status(201).json({ 
                success:true,
                message:"user Created or Signup successfully !",
                 user:newUser
               })

        
      } catch (error) {   

         return res.status(500).json({
          success:false,
             message:"Opps ! Something went wrong ,Please try after some time",
             error:error
          })
        
      }



        }


exports.loginController= async (req,res)=>{
    try {    
        
            console.log("checking req.body",req.body);
         
              const {email,password}=req.body;  

                if(!email || !password){
                    return res.status(400).json({
                        success:false,
                        message:"Please Provide all details !"
                    })
                }   
                
                const userfromDb=await userModel.findOne({email});  
                  if(!userfromDb){
                     return res.status(400).json({
                        success:false,
                        message:"User Not Found , Please SignUp before Login !"
                     })
                  }

                console.log("checking userfromDb",userfromDb);
                
                const passwordfromdb=userfromDb.password;
                  
                const comparePassword=await bcrypt.compare(req.body.password,passwordfromdb);

                  if(!comparePassword){
                     return res.status(401).json({
                        success:false,
                        message:"Please provide a valid password"
                     })
                  }
                     console.log(process.env.JWT_SECRET  ,"checing jwt secret")
                 
                
                  const token=JWT.sign({_id:userfromDb._id},process.env.JWT_SECRET,{expiresIn:"2d"});
                  console.log(token,"token  generated");


                  res.status(200).json({
                    success:true,
                    message:"user Loggend In successfully !",
                    token ,
                    user:userfromDb
                  })
                 

  

         } catch (error) {

            return res.status(500).json({
              success:false,
                message:"Something went wrong ",
                error:error
            })
        
    }
}

exports.myporfileController=async(req,res)=>{  
  try {     

          console.log("user id from authmiddlware",req.UserId);

          const user=await userModel.findById(req.UserId).select("-password");
              console.log(user);
              
      res.status(200).json({
      
          user
      })
      
  } catch (error) { 
    return res.status(500).json({
      success:false,
      error:error,
    })
      
  }
}


exports.updateController=async(req,res)=>{
  try {  
         const user=await userModel.findById(req.UserId)

         console.log("user found",user)
         if(user){
          user.name=req.body.name || user.name
          user.email=req.body.email || user.email
          // user.password=await bcrypt.hash(req.body.password,10)  || user.password 
          user.MobileNumber=req.body.mobilenumber || user.MobileNumber
          

         }else{
          return res.status(404).josn({
               success:false,
               message:'user not found'
          })
         }
         const updateUser=await user.save();

         console.log("updated user in userController js is" , updateUser)

       res.status(200).json({
          success:true,
          message:"user updated successfully !",
          updateUser,

         })
      
  } catch (error) { 
            res.status(500).json({
               success:false,
               message:"something went wrong",
               error:error.message,
            })
       
  }
}