//   we can define initial state like this

// const initialState={
//     products:[],
//        loading:false,
//        error:null
// }


// ------------------------------------------------------------------------------------------------------------------------------------------------

// Since you haven't initially defined products, loading, and error, they will be undefined until the corresponding action is dispatched to set their values. This is fine, as Redux allows you to dynamically add properties to your state as needed 
// const initialState={} 


// export const productList=(state=initialState ,action )=>{
             
//     switch(action.type){
//        case "PRODUCT_LIST_REQUEST": 
//             return {  ...state, loading:true,products:[] }; 
//         case "PRODUCT_LIST_SUCCESS":
//             return {  ...state, loading:false,products:action.payload }
//         case "PRODUCT_LIST_FAIL":
//             return {  ...state ,loading:false,error:action.payload}
//         default: return state 
//      }

// };


// This will also  work 

export const productList=(state={products:[], singleproduct:[], loading:false,error:null}  ,action )=>{
             
    switch(action.type){
       case "PRODUCT_LIST_REQUEST": 
            return {  ...state, loading:true,products:[] }; 
        case "PRODUCT_LIST_SUCCESS":
            return {  ...state, loading:false,products:action.payload }
        case "PRODUCT_LIST_FAIL":
            return {  ...state ,loading:false,error:action.payload}

        case "SINGLE_PRODUCT_LIST":
            return { ...state,loading:false,singleproduct:action.payload }    
        default: return state 
     }

};