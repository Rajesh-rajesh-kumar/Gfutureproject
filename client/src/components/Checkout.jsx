import React from 'react' 
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Checkout = ({step1,step2,step3,step4}) => { 


  return (
    <>
          <Nav style={{display:"flex" ,alignItems:"center",justifyContent:"center", marginBottom:"20px", gap:"10px",  textDecoration:"none" }}  >
               <Nav.Item>
                 {
                    step1?( 
                        <Link to="/login"  style={{textDecoration:"none"}}  > 
                          SignIn
                        </Link>
                    ):(
                          <Nav.Link disabled   > 
                          SignIn 
                          </Nav.Link>
                    )
                 }
               </Nav.Item>
              {/* <p style={{width:"50px",height:"2px" ,color:"red", background:"red", display:"flex", alignItems:"center",justifyContent:"center"}} ></p> */}
              <i className="fa-solid fa-arrow-right"></i>
               <Nav.Item>
                 {  
                    step2?( 
                        <Link to="/shipping"  style={{textDecoration:"none"}}   > 
                          Shipping
                        </Link>
                    ):(
                          <Nav.Link disabled > 
                          Shipping
                          </Nav.Link>
                    )
                 }
               </Nav.Item>
               <i className="fa-solid fa-arrow-right"></i>
               <Nav.Item>
                 {  
                    step3?( 
                        <Link to="/paymentmethod"   style={{textDecoration:"none"}}  > 
                          Payment Method
                        </Link>
                    ):(
                          <Nav.Link  disabled  > 
                          Payment Method
                          </Nav.Link>
                    )
                 }
               </Nav.Item>
               <i className="fa-solid fa-arrow-right"></i>
               <Nav.Item>
                 {  
                    step4?( 
                        <Link to="/placeorder" style={{textDecoration:"none"}}  > 
                          Place Order
                        </Link>
                    ):(
                          <Nav.Link  disabled > 
                          Place Order
                          </Nav.Link>
                    )
                 }
               </Nav.Item>
               
          </Nav>
    </>
  )
}

export default Checkout
