import React from 'react'
import Container  from 'react-bootstrap/esm/Container'
import {Row,Col} from 'react-bootstrap'

const Footer = () => {
  return (
   <footer>
     <Container>
     <Row>
      <Col className='text-center' >
          Copyright &copy; GFuture Tech Pvt. Ltd.
      </Col>
     </Row>
  </Container>
   </footer>
  )
}

export default Footer
