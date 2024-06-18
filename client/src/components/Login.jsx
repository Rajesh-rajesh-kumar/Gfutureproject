import React ,{useState,useEffect}  from 'react';
import {useDispatch,useSelector} from 'react-redux'
// import { userLogin } from '../redux/actions/userAction';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom"
import { userLogin } from '../redux/actions/userActions';


const Login = () => {

   const dispatch=useDispatch()
     const [email,setEmail]=useState("");
     const [password,setPassword]=useState("")
    const navigate=useNavigate();  

    const {user,loading,error}=useSelector((state)=>state.user)
    console.log(user,loading,error)

      console.log(localStorage.getItem('user'))
     

      useEffect(()=>{
        if(localStorage.getItem('user')!=null){
          navigate("/") 
        }
      },[user])

 

     const loginHandler=async(e)=>{
  
                e.preventDefault();
                  try {
                  
                   dispatch(userLogin(email,password))
                  setEmail("");
                  setPassword("");
                  // navigate("/")

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
          
    <Form onSubmit={loginHandler}  >
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
        Not have an Account ? <Link to="/signup" > Register here </Link>
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

export default Login
