
import React ,{useState,useEffect}  from 'react';
import {useDispatch,useSelector} from 'react-redux'
// import { userLogin, userRegister } from '../redux/actions/userAction';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom"
// import { saveShippingAddress } from '../redux/actions/cartAction';
import { toast } from 'react-toastify';
import Checkout from './Checkout';
import { saveShippingAddress } from '../redux/actions/cartAction';

const ShippingScreen = () => { 

              
    const dispatch=useDispatch();
    const cart=useSelector((state)=>state.carts);
    const {shippingAddress}=cart
    // console.log(shippingAddress)
      const navigate=useNavigate(); 


    const [address,setAddress]=useState(shippingAddress?.address);
    const [city,setCity]=useState(shippingAddress?.city);
    const [postalCode ,setPostalCode]=useState(shippingAddress?.postalCode);
    const[state,setState]=useState(shippingAddress?.state);
    const[phone,setPhone]=useState(shippingAddress?.phone  );
         

    function saveShippingAddressHandler(e){ 
        
        e.preventDefault();

        if(!address || !city || !postalCode || !phone){
            toast.warn("All fields are mandatory");
            return;
        }
        
            dispatch(saveShippingAddress({address,city,postalCode,state,phone}))
                
             setTimeout(()=>{
                  navigate("/paymentmethod")
             },1000)
               

    }
  return (
    <div  
    style={{
        minHeight: "85vh",
        // marginTop: "20px",
        position: "relative",
        marginTop: "100px",
      }}
    >
     <Row>  
          <Checkout step1="step1" step2="step2"  />
       <Col md={3} style={{position:"relative", top:"20%",left:"40%"}}    >
          
    <Form onSubmit={saveShippingAddressHandler}  >
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Address</Form.Label>
        <Form.Control type="name" placeholder="Enter address"  required  value={address}  onChange={(e)=>setAddress(e.target.value)}    />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter city"  required   value={city}  onChange={(e)=>setCity(e.target.value)}    />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control type="number" placeholder="postalCode"   required value={postalCode} onChange={(e)=>setPostalCode(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="number" placeholder="Contact Number"  required  value={phone} onChange={(e)=>setPhone(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State"  required  value={state} onChange={(e)=>setState(e.target.value)}  />
      </Form.Group>

    
      <Button variant="primary" type="submit">
        Continue
      </Button>
    </Form>
  
       </Col>
     </Row>
    </div>
  )
}

export default ShippingScreen
