import React, { useEffect, useState } from 'react';

import ProductPage from './ProductPage';
import { Col, Container, Row } from 'react-bootstrap';
import {API} from '../Backend'
import { getAllProducts } from '../redux/actions/productActions';
import {useDispatch,useSelector} from 'react-redux'

import Loadingspinner from "./Loadingspinner"
import ErrorAlert from './ErrorAlert';

const Homepage = () => {


          const dispatch=useDispatch();

          const allproducts=useSelector((state)=>state.Products)
           const {products,loading,error}=allproducts

        
     useEffect( ()=>{ 
            dispatch(getAllProducts())
     },[dispatch])
     console.log(loading)
       
  return (  
    <> 


        
          <div style={{minHeight:"85vh" , marginTop:"20px", position:"relative", marginTop:"65px"  }} >
 
             {
              loading ? <Loadingspinner/>:error && !products ?<ErrorAlert variant="danger"  error={error} />:  <Container >
              <Row lg={3} md={4} sm={5} > 
              {
                  products?.map((product)=>( 
                  <Col lg={3} md={4}  sm={5} key={product._id} > <ProductPage  product={product}  /></Col>
                 
                 ))
                }
              </Row>
              
               </Container>
             }
            
          </div>
 
        
    </>
       

  )
}

export default Homepage
