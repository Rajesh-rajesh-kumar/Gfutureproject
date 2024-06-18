const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({ 
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        default:""
    },
    MobileNumber:{
        type:Number,
    }
      
} ,{timestamps:true} );

module.exports=mongoose.model('users',userSchema)