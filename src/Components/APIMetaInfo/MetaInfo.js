import React,{useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./MetaInfo.css"
import { Typography } from '@material-ui/core';
import ReqresLogo from "../../Images/logo.png"
import BeenhereIcon from '@material-ui/icons/Beenhere';

import { useSelector } from 'react-redux'

const MetaInfo = () => {

    const {loading,AllUsers} = useSelector(state=>state.getUsers)

    console.log(AllUsers)

    useEffect(() => {
      
    }, [loading,AllUsers])
    



  return (
    <>
    <Container fluid className='APIPanel'>
        <Row style={{padding:"1vmax",color:"white",height:"100%",alignContent:"center"}}>
        {/* border:"2px solid red" */}
            <Col className='API_column'>
               <img src={ReqresLogo} alt="Reqres" title='Reqres Logo'/>
               {AllUsers?<Typography>Success - <BeenhereIcon style={{color:"greenyellow",fontSize:"3vmax"}}/></Typography>:<Typography style={{color:"red"}}>Loading</Typography>}
               <Typography>Total Users - {AllUsers?AllUsers.total:"..."}</Typography>
            </Col>
        </Row>

    </Container>
    </>
  )
}

export default MetaInfo