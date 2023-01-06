import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Typography} from "@material-ui/core"
import "./UserInfo.css"
import Info from "../Info/Info.js"
import Profile from "../Profile/Profile.js"

const UserInfo = () => {
  return (
    <Container fluid className='UserInfoBox mx-0 px-0' >
        <Typography className="heading">Welcome to the C.O.N.V.I.N</Typography>
        <Row style={{height:"auto",margin:"1.3vmax 0"}}>
          {/* border:"2px solid orangered" */}
          {/* border:"2px solid red" */}
            <Col className="UserDP info" md={5}><Profile/></Col>
            <Col className="UserText info" md={7}><Info/></Col>
        </Row>
    </Container>
  )
}

export default UserInfo