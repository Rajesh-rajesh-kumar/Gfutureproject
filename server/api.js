require('dotenv').config()

const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const productModel=require("./models/productMode");


// import all routes here 
const auth=require("./routes/authRout");
const producroute=require('./routes/productRoute');




const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json());



app.use("/authpart",auth)
app.use('/product',producroute);


// console.log(process.env.MONGO_URL)

mongoose.connect(`${process.env.MONGO_URL}`)
  .then(() => console.log(' Database connected successfully ! '));



  app.get('/',(req,res)=>{
    res.status(200).json(
        "server setup successfully !"
    )
});
  




app.listen(4000,
    ()=>{
        console.log("server is running on port 4000")
    }
)


