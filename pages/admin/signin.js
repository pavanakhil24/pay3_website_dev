import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
import Signinform from "../../components/loginform/signinform";
// import LoginForm from "./components/loginform/loginForm.jsx"; 
// import LoginForm from "../../components/loginform/loginForm";
// import Register from "../../components/loginform/signinform";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";

function Signin() {
  return (
    <div className="App" >
      {/* <Container style={{backgroundColor:'red',height:'800px',width:'4000px'}}> */}

        {/* <Row style={{backgroundColor:'#eeeeef',height:'800px'}}> */}
          
          
          
           
          {/* <div style={{color:'black',fontsize:'18px',fontWeight:'bold'}}>
                 CIMA WALLET SIGNUP
              </div> */}
            <Jumbotron style={{backgroundColor:'#162a9e'}}>
            <div style={{color:'white',fontsize:'18px',fontWeight:'bold'}}>
                 CIMA WALLET SIGNUP
              </div>
              <Card>
                <CardBody>
                  <Signinform/>
                </CardBody>
              </Card>
            </Jumbotron>
          
         
          
        {/* </Row> */}
      {/* </Container> */}
    </div>
  );
}

export default Signin
