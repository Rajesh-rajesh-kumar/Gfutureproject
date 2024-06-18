

import { combineReducers } from "redux";
import { productList } from "./productReducer";
import { cartList } from "./cartReducer";

import { UpdateduserProfile, userInfo, userProfile, userRegister } from "./userReducer";



const rootReducer=combineReducers({
    Products:productList,
    carts:cartList,
    user:userInfo,
    registeruser:userRegister,
    userDetail:userProfile,
    updateduser:UpdateduserProfile,
    

});

export default rootReducer;


