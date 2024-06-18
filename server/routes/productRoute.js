const express=require('express'); 
const { allProduct, singleProductController, saveProductinDb, deletProductController } = require('../controller/productController');

const route=express.Router();

route.get("/allproducts",allProduct) 
route.get('/singleproduct/:id',singleProductController)
route.post('/saveproduct',saveProductinDb)
// route.delete('/deleteproduct/:id',deletProductController)




module.exports=route;

