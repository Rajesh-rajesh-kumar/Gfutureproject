const mongoose=require('mongoose');


const productSchema=new mongoose.Schema({
        User:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'users',
           },

        ],
        title:{
            type:String,
            default:"",
        },
        image:{
            type:String,
            required:true,
            default:"",
        },
      
        category:{
            type:String,
            required:true,
            defalult:""
        },
        description:{
            type:String,
            required:true,
            default:"",
        },
        
        rating:[
          {
            rate:{
                type:String
             },
             count:{
                type:String
             }
          }
        ]
        
        ,

        countInStock:{
            type:String,
            default:""
        },
     
        price:{
            type:String,
            requied:true,
        },
      

} ,{timestamps:true} ) ;

module.exports=mongoose.model("products",productSchema);

 











