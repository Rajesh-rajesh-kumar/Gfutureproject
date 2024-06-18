import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../redux/actions/userActions";
// import { userLogout } from "../redux/actions/userAction";


const Header = () => { 
               
    const dispatch=useDispatch();

    const data=useSelector((state)=>state.user.user)
    console.log(data);



             const logOutHandler=()=>{
                    dispatch(userLogout())
                    // localStorage.removeItem("user")
             }
  return (
    <Navbar collapseOnSelect expand="lg" className=" " style={{background:"#b8b7b4" , position:"fixed", zIndex:"50", width:"100%", top:"0",  }}   >
      
        <Container > 
       <Link to="/" style={{textDecoration:"none"}}  >  <Navbar.Brand >GFuture Tech Pvt. Ltd.</Navbar.Brand> </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
       <Navbar.Collapse id="responsive-navbar-nav "  className="">
          <Nav  style={{marginLeft:"auto" ,gap:"5px" }}  >
            {/* {
              data? <Link  style={{textDecoration:"none"}} onClick={logOutHandler}    ><Nav.Link as="div" >  <i className="fa-solid fa-user"></i> &nbsp; LOGOUT</Nav.Link> </Link> : <Link to="/signin" style={{textDecoration:"none"}}  ><Nav.Link as="div" >  <i className="fa-solid fa-user"></i> &nbsp;  LOGIN</Nav.Link> </Link>
            } */}

            {
              data ?  <NavDropdown title={data?.user?.name} id="nav-dropdown">
               <NavDropdown.Item > <Link  to="/myprofile" style={{textDecoration:"none"}} >   My Profile </Link></NavDropdown.Item>
              <NavDropdown.Item onClick={logOutHandler}>LogOut </NavDropdown.Item> 
            
            </NavDropdown>:<Link to="/signin" style={{textDecoration:"none"}}  ><Nav.Link as="div" >  <i className="fa-solid fa-user"></i> &nbsp;  LOGIN</Nav.Link> </Link>
            }
            <Link to="/cart/1" style={{textDecoration:"none"}} ><Nav.Link as="div" > <i className="fa-solid fa-cart-shopping"></i>  &nbsp; CART</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
       
      
    </Navbar>
  );
};

export default Header;
