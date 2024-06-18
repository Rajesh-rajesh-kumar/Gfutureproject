
const initialState = {
    cartitems: [],
    // user:[]
    shippingAddress:{},
  };
  
  if(localStorage.getItem("cartItems")){
        initialState.cartitems=JSON.parse(localStorage.getItem('cartItems'));
  }
  if(localStorage.getItem("shippingAddress")){
    initialState.shippingAddress=JSON.parse(localStorage.getItem("shippingAddress"));
  }
  
  export const cartList = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const items = action.payload;
        const existItem = state.cartitems.find(
          (x) => x.productid === items.productid
        );
        console.log(existItem);
  //       alert("in reducer")
        if (existItem) {
  
        
          return {
            ...state,
            cartitems: state.cartitems.map((x) =>
              existItem.productid === x.productid ? items : x
            ),
          };
        } else {
          //      console.log({...state ,user:[...state.user ,"rajesh"]})
          return { ...state, cartitems: [...state.cartitems, items] };
        }  
  
        case"REMOVE_FROM_CART":
                  console.log(action.payload)
            // return { ...state,cartitems:[...state.cartitems,action.payload]  }
            return {...state ,cartitems:action.payload}
        case "Add_Shipping_Address":
          return {...state,shippingAddress:action.payload}
  
        case "Add_PAYMENT_METHOD":
          return {...state,PaymentMethod:action.payload}
      default:
        return state;
    }
  };
  