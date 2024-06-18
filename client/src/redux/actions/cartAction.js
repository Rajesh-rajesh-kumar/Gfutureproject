import { API } from "../../Backend";


export const cartProduct =(id,qty)=>{
         return async(dispatch,getState)=>{
              
              console.log(id,qty);
              const res=await fetch(`${API}/product/singleproduct/${id}`) 
                console.log(res)
             const data=await res.json()
             console.log(data.singleproduct); 

             dispatch({
                type:"ADD_TO_CART",
                payload:{
                  productid:data?.singleproduct?._id,
                  price:data?.singleproduct?.price,
                  name:data?.singleproduct?.title,
                  image:data?.singleproduct?.image,
                  countInStock:data?.singleproduct?.countInStock,
                //   rating:data?.singleproduct?.rating,
                  category:data?.singleproduct?.category,
                  qty:qty,
                }
             })  
            
             console.log(getState());
            //  alert("then cart action")
             localStorage.setItem("cartItems",JSON.stringify(getState().carts.cartitems));

             


         }
}


export const removeFromCart=(id)=>(dispatch,getState)=>{
                  console.log("checking product id",id); 

                   console.log(getState().carts.cartitems) 

                   const data=getState().carts.cartitems.filter((item)=>item.productid!==id)
                             console.log(data);
                     dispatch({
                      type:"REMOVE_FROM_CART",
                      payload:data,

                     }) 

                     console.log(getState().carts.cartitems);

                  localStorage.setItem("cartItems",JSON.stringify(data))
 
}
      
export const saveShippingAddress=(shippingaddress)=>(dispatch,getState)=>{  

                        console.log(shippingaddress);
                     localStorage.setItem("shippingAddress",JSON.stringify(shippingaddress));

                     dispatch({
                        type:"Add_Shipping_Address",
                        payload:shippingaddress
                     })

}

export const paymentMethod=(paymentmethod)=>{
    return (dispatch ,getState)=>{
         
      console.log(paymentmethod)

      dispatch({
         type:"Add_PAYMENT_METHOD",
         payload:paymentmethod
      })
      localStorage.setItem("paymentype",JSON.stringify(paymentmethod));
       
         
    }
}