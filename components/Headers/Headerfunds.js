import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Link from "next/link";
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";
// import axios from 'axios';
// import logo from 'assets/img/brand/visa.jpg'
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  CardHeader,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
 
  Media,
} from "reactstrap";
import Deposit from "components/Headers/deposit.js";
// import Balances from "components/Headers/balance.js";
export const getStaticProps = async () => {
    
  const res = await fetch("http://localhost:4000/employee/GAZUY2DSCHQWE36XK53BYCRMMAENTIA37X6D5IKD4BHU7U4JRV35IU55/checkbalance");
  const data = await res.json();

  

  return {
    props: {balanc: data}
  }
}


// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import Deposit1 from "./deposit4";
import Withdraw from "./withdraw";
// import Balances from "./balance";

function Header() {
  
  
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
    
      <div className="header pb-8 pt-3 pt-md-6" style={{backgroundColor:'#eeeeef'}}>
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col>
             
              <br></br>
              <Row>
              <Col lg="8" xl="6" >
                <Card className="card-stats mb-4 mb-xl-0" style={{padding:'10px',marginLeft:'12px',height:'174px',marginBottom:'100px'}}>
                  <CardBody >
                    <Row>
                      <div className="col">
                        <CardTitle
                          style={{fontSize:'18px'}}
                        >
                          
                        </CardTitle>
                        <span style={{padding:'180px'}}>
                        <Button href='/admin/' style={{borderRadius:'10px',width:'190px',fontSize:'18px',backgroundColor:'#e67516',color:'white'}}  >WITHDRAW</Button>
                      </span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="5.3">
                <Card className="card-stats mb-4 mb-xl-0" style={{padding:'10px',marginRight:'12px',height:'174px'}}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                         style={{fontSize:'18px'}}
                        >
                         
                        </CardTitle>
                        <span style={{alignContent:'center',padding:"180px"}}>
                        
                        <Button href="/admin/transaction" style={{borderRadius:'10px',width:'190px',fontSize:'18px',backgroundColor:'#162a9e',color:'white'}} >DEPOSIT</Button>
                      </span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              </Row>
              
              </Col>{" "}
              
              
           

            </Row>
            
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
