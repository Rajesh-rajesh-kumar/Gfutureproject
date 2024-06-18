const JWT =require('jsonwebtoken');

exports.authMiddleware=(req,res,next)=>{  
       try {  
        console.log(req.headers.authorization, "checking request");
        const token=req.headers.authorization.split(" ")[1];
        // console.log(token)  
        if(!token){
            return res.status(401).json({
                success:false,
                message:" Unauthorized  access ", 

            }) 

        }

      const data =JWT.verify(token,process.env.JWT_SECRET);
            
     

        req.UserId=data._id;
        next();
         
        
       } catch (error) {  

        console.log(error) 
        res.status(500).json({
            success:false,
            error:error
        })
        
       }
      


      
       
}