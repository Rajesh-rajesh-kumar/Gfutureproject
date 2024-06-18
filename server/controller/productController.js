
const productModel=require('../models/productMode');
// const { all } = require('../routes/authRout');

const products=require('../config/product')

exports.allProduct=async(req,res)=>{
    try {    
        
        // const allproduct= await  productModel.insertMany(products)
            const allProductsfromdb=await  productModel.find({});
            //   console.log("cheecking products",allProductsfromdb)
        
                 
            
        res.status(200).json({
            success:true,
            message:"All product fetched successfully !",
            allProducts:allProductsfromdb
            
        })

    } catch (error) { 

          res.status(500).json({
            success:false,
            message:"Opps ! Something went wrong ",
            err:error
          })
        
    }
}

exports.singleProductController=async(req,res)=>{
    try {    
             console.log(req.params,"checing query");
         const id=req.params.id;  
           
         if(!id){
            return res.status(400).json({
                success:false,
                message:"Please Provide productid"
            })
         }
           
        //  const singleProductById=await productModel.findById(id);
        const singleproduct=await productModel.findById({ _id:req.params.id})
           console.log("checing single Product ",singleproduct);
         
           if(!singleproduct){
            res.status(204).json({
                   success:false,
                   message:"product not found",
            })
     }  
        res.status(200).json({ 
            success:true,
            singleproduct,
            message:"single product detail !",
        })
        
    } catch (error) {  

        return res.status(500).json({
            success:false,
            error,
            message:"opps something went wrong ",
        })
        
    }
}

exports.saveProductinDb=async(req,res)=>{
      try {   
               const {name,image,brand,category,description,rating,price}=req.body;
                 if(!name || !image || !brand || !category || !description || !rating || !price ){
                    return res.status(400).json({
                         success:false,
                         message:"Please provide all fields"
                    })
                 }

                 const newProduct=await productModel.create({name,image,brand,category,description,rating,price})
                    console.log("new Product ",newProduct);

                    res.status(201).json({
                        message:"new Product created successfully",
                        newProduct
                    })

              
        
      } catch (error) {  
        return res.status(500).json({
            success:false,
            err:error,

        }) 


        
      }

      exports.deletProductController=async(req,res)=>{
        try {  

              const id=req.params.id;
              
               if(!id){
                 return res.status(500).json({
                    success:false,
                    message:"please provide a valid id !"
                 })
               }

               await productModel.findByIdAndDelete(id);

               return res.status(200).json({
                success:true,
                message:"product deleted successfully !"
               })
            
        } catch (error) {   
              return res.status(500).json({
                success:false,
                 message:"something went wrong !"
              })
            
        }
      }
}