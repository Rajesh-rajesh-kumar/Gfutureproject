import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loadingspinner = () => {
  return (
    <div style={{
      position:"relative",

    
      textAlign:"center",
      marginTop:"25%",
    
    
    }} >
        <Spinner animation="border" role="status" className=" " variant='success'   >
      
      </Spinner>
    </div>
  )
}

export default Loadingspinner;
