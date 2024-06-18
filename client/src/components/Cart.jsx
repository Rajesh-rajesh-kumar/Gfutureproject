import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { cartProduct, removeFromCart } from "../redux/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";


import { Button, Card, Col, Image, ListGroup,ListGroupItem, Row} from 'react-bootstrap'
const Cart = () => {   


         const navigate=  useNavigate();
  const { id } = useParams();
   const dispatch=useDispatch();
     const carts=useSelector((state)=>state.carts.cartitems);
     console.log(carts,"checking carts");
 
  const searchParams = new URLSearchParams(useLocation().search);

  console.log(searchParams);

  const qty = searchParams.get("qty");

  console.log(qty); 

  useEffect(()=>{
        if(id && qty ){
          dispatch(cartProduct(id,qty))
        }

      },[id,dispatch]);


   const checkOut=()=>{  
    navigate("/shipping");

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

        {
          carts?.length===0?(
            <> 
             <ListGroup  style={{display:"flex" ,alignItems:"center",}}  >
              <ListGroupItem> Your Cart is Empty  &nbsp;<Button onClick={()=>navigate("/")}  variant="light" >   <i className="fa-solid fa-arrow-left"></i>  Go Back  </Button>    </ListGroupItem>
             </ListGroup>
            </>
          ):( <>  
               <Row>
                <Col md={8}>
                   <ListGroup variant="flush" >
                       {
                        carts?.map((item,index)=>(
                          <Row key={index} >
                            <Col md={2} > <Image src={item.image} fluid rounded    />    </Col>

                             <Col md={2}> 
                                 {item?.name}
                            </Col>
                            <Col md={2} > price: ${item?.price}   </Col> 
                             
                            <Col md={1} >
                                   {item?.qty}
                            </Col>

                            <Col md={2}>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          cartProduct(item.productid
                            , Number(e.target.value))
                        )
                      }
                    >
                      {Array.from(
                        { length: item?.countInStock },
                        (_, index) => (
                          <option key={index + 1} value={index + 1}>
                            {index + 1}
                          </option>
                        )
                      )}
                    </select>
                    </Col>
                   <Col md={1} >
                   <Button  
                     type="button"
                     variant="light"

                     onClick={()=>dispatch(removeFromCart(item.productid) )} 
                    >
                {/* <i className="fa-solid fa-trash"></i> */}
                <MdDelete />
                    </Button>
                   </Col>
                
                          </Row>
                        ))
                       }
                   </ListGroup>

                </Col>

                
        <Col md={3}   >
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                {/* <h2>
                  SubTotal({cartItems.reduce((acc, item) => (acc+item?.qty), 0)})
                  items
                </h2> */}
                  <h2>
             SubTotal( {carts?.reduce((acc, item) => (acc + (item.qty ? Number(item.qty) : 0)), 0)} )
                items
      </h2>
                $
                {carts
                  ?.reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroupItem>
              <ListGroupItem>
                  <Button type="button"className="btn-block" disabled={carts?.length===0} onClick={checkOut} > Proceed to checkout </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
               </Row>
           </> )
        }

      
    </div>
  );
};

export default Cart;
