
// export const userInfo=(state={},action)=>{
//     switch(action.type){
//         case "LOGIN_REQUEST_INITIATE":
//             return {loading:true }
//         case "LOGIN_REQUEST_SUCCESS":
//             return { loading:false,user:action.payload }
//         case "USER_REQUEST_FAIL":
//             return { loading:false,error:action.payload }
//         case "USER_LOGOUT":
//             return {}
//         default :   
//           return state;

// import { json } from "react-router-dom";

         
//     }
// }


const userFromLocalStoreage=localStorage.getItem("user")?JSON.parse(localStorage.getItem('user')):null

const initialState = {
    user: null,
    loading: false,
    error: null
};

if(localStorage.getItem("user")){

}
 initialState.user=localStorage.getItem("user")?JSON.parse(localStorage.getItem('user')):null

export const userInfo = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN_REQUEST_INITIATE":
            return { ...state, loading: true };
        case "LOGIN_REQUEST_SUCCESS":
            return { ...state, loading: false, user: action.payload, error: null };
        case "USER_REQUEST_FAIL":
            return { ...state, loading: false, error: action.payload }; 
        case "USER_LOGOUT":
            return {}  // reset to initial state
        default:
            return state;  // return the current state if action type doesn't match
    }
};


export const userRegister = (state ={}, action) => {
    switch(action.type) {
        case "REGISTER_REQUEST_INITIATE":
            return { ...state, loading: true };
        case "REGISTER_REQUEST_SUCCESS":
            return { ...state, loading: false, registeruser: action.payload, error: null };
        case "REGISTER_REQUEST_FAIL":
            return { ...state, loading: false, error: action.payload }; 
        // case "USER_LOGOUT":
        //     return {}  // reset to initial state
        default:
            return state;  // return the current state if action type doesn't match
    }
};

export const userProfile=(state={userprofile:{},loading:false,error:null},action)=>{ 

         switch(action.type){
                case "USER_DETAIL_REQUEST_INITIATED":
                    return {...state ,loading:true}
                case "USER_DETAIL_SUCCESS":
                    return {...state,loading:false,userprofile:action.payload}
                case "USER_DETAIL_FAIL":
                     return {...state,loading:false,error:action.payload}
            
             default: return state;
         }

}


export const UpdateduserProfile=(state={updatedprofile:{},loading:false,error:null},action)=>{ 

    switch(action.type){
           case "USER_UPDATE_REQUEST_INITIATED":
               return {...state ,loading:true}
           case "USER_UPDATE_SUCCESS":
               return {...state,loading:false,userprofile:action.payload}
           case "USER_UPDATE_FAIL":
                return {...state,loading:false,error:action.payload}
       
        default: return state;
    }

}
