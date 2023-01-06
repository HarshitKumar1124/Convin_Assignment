import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import UserInfo from "./Components/UserInfo/UserInfo.js";
import UserCorousel from "./Components/UserCorousel/UserCorousel.js";
import APIMetaInfo from "./Components/APIMetaInfo/MetaInfo.js";
import { useDispatch,useSelector } from "react-redux";
import { getAllUsers } from "./Redux_Operations/ReducerAction";

import Loader from "./Components/Loader/Loader.js"

const App = () => {
  const [delay,setDelay]=useState(true);
  const dispatch = useDispatch()

  const {loading,AllUsers} = useSelector(state =>state.getUsers )

  useEffect(() => {

    const timeout = setTimeout(() => dispatch(getAllUsers(1)) , 2000); 
    //here delebirately we have delayed the API Request in order to show the <LOADER/> component.. 
    //Because API Requesting was quick enough to not render the <LOADER />
    return () => clearTimeout(timeout);
    
  }, [loading])



  return (
    <>
      {loading!= false ? (
        <Loader/>
      ) : (
        <>
          <Container fluid className="AppBox">
            <Row
              className="Display-section justify-content-md-center"
              style={{ margin: "0vmax", height: "75%" }}
            >
              <Col md={12}xl={8} className="Panel Row1Col mx-3 px-0">
                <UserInfo />
              </Col>
              <Col md={12} xl={2} className="mx-3 Row1Col">
                <APIMetaInfo />
              </Col>
            </Row>
            <Row
              className="Display-section"
              style={{ margin: "0vmax 0 2vmax", height: "25%" }}
            >
              <Col className="Panel mx-0 px-0">
                <UserCorousel />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default App;
