import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css"
import UserInfo from "./Components/UserInfo/UserInfo.js"
import UserCorousel from "./Components/UserCorousel/UserCorousel.js"

const App = () => {
  return (
    <>
      <Container fluid className="AppBox">
      <Row className='Display-section justify-content-md-center' style={{height:"75%"}}>
        <Col md={8} className="Panel mx-0 px-0">
          <UserInfo/>
        </Col>
      </Row>
      <Row className='Display-section'style={{height:"25%"}}>
        <Col className="Panel mx-0 px-0">
          <UserCorousel/>
        </Col>
      </Row>
       

      </Container>
    </>
  )
}

export default App