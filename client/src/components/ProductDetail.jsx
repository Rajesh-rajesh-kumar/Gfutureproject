import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import products from '../product';
// import Review from "./Review";
import { API } from "../Backend";

import Loadingspinner from "./Loadingspinner";
import ErrorAlert from "./ErrorAlert";
import Form from "react-bootstrap/Form";
import { getSingleProduct } from "../redux/actions/productActions";


const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const [qty,setQty]=useState();

  //  const product=useSelector((state)=>state.Products.singleproduct)
  const navigate=useNavigate();
  const { singleproduct, loading, error } = useSelector(
    (state) => state?.Products
  );
  console.log(singleproduct, loading, error);
  console.log(singleproduct?.countInStock);



  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(id));
    }
  }, [dispatch]);



  const [qty,setQty]=useState([1]);


  



  const goToCartPage=()=>{ 
      if(!qty){
        alert("select quantity first")
      }
     if(id && qty){
      navigate(`/cart/${id}?qty=${qty}`);
     }
       
  }

  return (
    <Container>
      <div style={{ marginTop: "170px", minHeight: "85vh" }}>
        {loading ? (
          <Loadingspinner />
        )  : (
          <>
            <Link to="/">
              
              <Button variant="light" style={{marginLeft:"15px"}} >
                
                <i className="fa-solid fa-arrow-left"></i> Back
              </Button>
            </Link>
            <Row>
              <Col  >
                <Image src={singleproduct?.image} style={{height:"250px"}}  />
              </Col>
              <Col style={{ display: "flex", flexDirection: "column" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="fw-bold mb-4">
                    {singleproduct?.title}
                  </ListGroup.Item>
                  <ListGroup.Item className="mb-4">
                    {singleproduct.description}
                  </ListGroup.Item>
                  <ListGroup.Item>Price:${singleproduct.price}</ListGroup.Item>
               
                </ListGroup>
              </Col>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ListGroup>
                  <ListGroupItem>
                    Status: &nbsp;
                    {singleproduct?.countInStock > 0
                      ? "In Stock"
                      : "Out Of Stock"}
                  </ListGroupItem>

                  <ListGroupItem style={{display:'flex'}} >
                    <ListGroupItem as="div" style={{display:"flex",flexShrink:"0" ,outline:"none",border:"none" }} >Qty :</ListGroupItem>
                    <Form.Select aria-label="Default select example" onChange={(e)=>setQty(e.target.value)}  >
                       <option>Select Quantity</option>
                  

{Array.from({ length:singleproduct?.countInStock }, (_, index) => (
  <option key={index + 1} value={index + 1}>
    {index + 1}
  </option>
))}
                     
                     
                      
                     
                    </Form.Select>
                  </ListGroupItem>

                  <ListGroupItem>
                    
                    <Button className="mt-4 btn-block " type="btn" onClick={()=>goToCartPage()}   >
                      Add To Cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </>
        )}
      </div>
    </Container>
 
  );
};

export default ProductDetail;
