import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom"


const ProductPage = ({ product }) => {
  console.log(product, "product");
  return (
    <Container>
      <Card style={{  marginTop: "10px "  ,  }} className="py-3 rounded  "  >
       <Link  to={`/product/${product._id}`} > <Card.Img variant="top" src={`${product.image}`}  style={{height:"300px"}} /></Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}> 
            <Card.Title as="div" >
              <strong> {product.title} </strong>
            </Card.Title> 
          </Link>
        </Card.Body>
      
       

        <Card.Text as="div">
          <div style={{ marginTop: "2px"  ,textAlign:"center"  }}> Price: ${product.price}</div>
        </Card.Text>
      </Card>
    </Container>
  );
};

export default ProductPage;
