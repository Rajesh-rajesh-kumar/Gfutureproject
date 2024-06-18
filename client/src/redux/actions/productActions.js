

// export const getAllPor=()=>{
//     return (dispatch)=>{
//         dispatch({
//             type:"PRODUCT_LIST_REQUEST"
//         })
//     }
// }

import { API } from "../../Backend";


 export  const getAllProducts=()=>async (dispatch)=> {
      try {
        dispatch({
            type:"PRODUCT_LIST_REQUEST" 
        }); 

          const res = await fetch(`${API}/product/allproducts`);
          const data=await res.json();
          // console.log(data?.allProducts);
          console.log(data);
          if(!data?.success){

              const errorMessage=data?.error || data?.message;
            dispatch({
              type:'PRODUCT_LIST_FAIL',
              payload:errorMessage,
            })
          
          }

      dispatch({
         type:"PRODUCT_LIST_SUCCESS",
         payload:data?.allProducts
      })
           
      } catch (error) {  
           console.log(error)
          dispatch({
            type:'PRODUCT_LIST_FAIL',
            payload:error,
          })
        
      }


}

export const getSingleProduct=(productid)=>{
     return async(dispatch)=>{
         try {
          dispatch({
            type:"PRODUCT_LIST_REQUEST"
           }); 

           const res=await fetch(`${API}/product/singleproduct/${productid}`) 
              const data=await res.json();

              if(!data?.success){

                const errorMessage=data?.error ;
              dispatch({
                type:'PRODUCT_LIST_FAIL',
                payload:errorMessage,
              })
            
            }

              dispatch({
                type:"SINGLE_PRODUCT_LIST",
                payload:data?.singleproduct
              })
         } catch (error) {
                      console.log(error);
                      dispatch({
                        type:"PRODUCT_LIST_FAIL" ,
                        payload:error.message

                      })
         }

     }
}