import React ,{useState,useEffect}  from 'react';
import {useDispatch,useSelector} from 'react-redux'
// import { userLogin, userRegister } from '../redux/actions/userAction';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom"
import { userRegister } from '../redux/actions/userActions';

const Signup = () => {


  
  const dispatch=useDispatch()
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState("");
  const[name,setName]=useState("")
 const navigate=useNavigate();  

 const data=useSelector((state)=>state.registeruser.registeruser)

const signupHandler=async(e)=>{

             e.preventDefault();
               try {
               
                dispatch(userRegister(name,email,password,phone))
               setEmail("");
               setPassword("");
               setName("");
               setPhone("");
               navigate("/signin")

               } catch (error) {
                  console.log(error)

               }
               
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
       <Col md={3} style={{position:"relative", top:"20%",left:"40%"}}    >
          
    <Form onSubmit={signupHandler}  >
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name"  value={name}  onChange={(e)=>setName(e.target.value)}    />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email}  onChange={(e)=>setEmail(e.target.value)}    />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="number" placeholder="Moblile number" value={phone} onChange={(e)=>setPhone(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
        Already Have an Account ? <Link to="/signin" > Login here </Link>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  
       </Col>
     </Row>



    </div>
  )
}

export default Signup
