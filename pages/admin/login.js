import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
// import LoginForm from "./components/loginform/loginForm.jsx"; 
import LoginForm from "../../components/loginform/loginForm";
// import Facebook from "./facebooklogin";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";

function Login() {
  return (
    <div className="App" >
      {/* <Container style={{backgroundColor:'white',height:'800px',width:'4000px'}}> */}

        {/* <Row style={{backgroundColor:'#eeeeef',height:'800px'}}>
          <Col />
          
          <Col >
            <hr/> */}
          <Row>
          <Col>
         <img style={{width:'700px',alignSelf:'center',position:'fixed',marginTop:'150px'}}
                      alt="..."
                      src={require("assets/img/theme/login.png")}
                    />
          </Col>
          <Col>
            <Jumbotron style={{backgroundColor:'white'}}>
              
           
              <div >
                
              <Card style={{alignContent:'center'}}>
                <CardBody>
                
                  <LoginForm />
                </CardBody>
              </Card>
             </div>

            </Jumbotron>
           
            </Col>
          {/* </Col>
          <Col />
        </Row> */}
      {/* </Container> */}
      </Row>
    </div>
  );
}

export default Login
