import { toast } from "react-toastify";
import { API } from "../../Backend";
export const userLogin = (email, password) => async (dispatch, getState) => {
  try {
    console.log(email, password);

    dispatch({
      type: "LOGIN_REQUEST_INITIATE",
    });

    const res = await fetch(`${API}/authpart/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data, "checing userres");
    if (data.success) {
      toast.success("user login successfully");
      dispatch({
        type: "LOGIN_REQUEST_SUCCESS",
        payload: data,
      });

      localStorage.setItem("user", JSON.stringify(data));
    } else {
      toast.error(data.message);
      dispatch({
        type: "USER_REQUEST_FAIL",
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: "USER_REQUEST_FAIL",
      payload: error,
    });
  }
};

export const userLogout = () => (dispatch) => {
  dispatch({
    type: "USER_LOGOUT",
  });

  localStorage.removeItem("user");
};

export const userRegister =
  (name, email, password, phone) => async (dispatch, getState) => {
    try {
      console.log(email, password);

      dispatch({
        type: "REGISTER_REQUEST_INITIATE",
      });

      const res = await fetch(`${API}/authpart/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, phone }),
      }); 

      const data = await res.json();  
      console.log(data, "checing userres");
      if (data.success) {
        toast.success("signup successfully");
        dispatch({
          type: "REGISTER_REQUEST_SUCCESS",
          payload: data,
        });

        

        // localStorage.setItem("user",JSON.stringify(data));
      } else {
        toast.error(data.message);
        dispatch({
          type: "REGISTER_REQUEST_FAIL",
          payload: data.message,
        });
      }
    } catch (error) {
      dispatch({
        type: "USER_REQUEST_FAIL",
        payload: error,
      });
    }
  };

  export const myProfile=()=>async(dispatch,getState)=>{
    try { 

      dispatch({
        type:'USER_DETAIL_REQUEST_INITIATED'
       })
        const token=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).token:null
        console.log(token)
        if(!token){
          // console.log("returne")
          return
        }
      const res=await fetch(`${API}/authpart/myprofile` ,
        {
          method:"GET",
          headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}` 
          }
        }
      )

      const data= await res.json();

      
    dispatch({
      type:"USER_DETAIL_SUCCESS",
      payload:data
  })
      
    } catch (error) { 
      console.log(error);
      
    dispatch({
      type:"USER_DETAIL_FAIL",
      payload:error
    })
    }
  }


  export const updateMYProfile=(name,email,password,phone)=> async(dispatch,getState)=> {
    try {   
             
       dispatch({
        type:'USER_UPDATE_REQUEST_INITIATED'
       })
      
      const token=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).token:null
      console.log(token)
      if(!token){
        // console.log("returne")
        return
      }
    const res=await fetch(`${API}/userroute/myprofile` ,
      {
        method:"PUT",
        headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${token}` 
        },
        body:JSON.stringify({name,email,password,phone})
      }
    )
     
    const data=await res.json();
    console.log(data)  

    dispatch({
      type:"USER_UPDATE_SUCCESS",
      payload:data,
    })

    // dispatch({
    //     type:"USER_DETAIL_SUCCESS",
    //     payload:data
    // })

    
  } catch (error) {   
    console.log(error); 

    dispatch({
      type:"USER_UPDATE_FAIL",
      payload:error
    })
    
  }
      
  }

  // updateMYProfile("updateuser","updateuser@gmail.com","",78945612443) 