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
// import Balances from "./balance";

function Header() {
  
  
  var x=20
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
              {/* <Col lg="8" xl="12 " > */}
                {/* <Card className="card-stats mb-4 mb-xl-0" >
                  <CardBody style={{backgroundColor:'#162a9e',borderRadius:'10px',backgroundImage:'url(https://imgr.search.brave.com/FQ5VO8l534L4tkgxBQP0niVo1cUZZPdJYujw5ufYfdk/fit/711/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/Z1k0Z1R2cUw0UjdG/YTlxbk4tbUZRSGFF/OCZwaWQ9QXBp)',backgroundBlendMode:'color-dodge'}}>
                    <Row>
                      <div className="col" >
                        <CardTitle
                          // tag="h4"
                          // className="text-uppercase text-muted mb-0"
                          style={{color:'white',fontWeight:'bold',fontSize:'1.625rem',textTransform:'uppercase'}}
                        >
                          <button style={{borderRadius:'10px',width:'190px',fontSize:'18px',backgroundColor:'white'}}> Announcements</button>
                        </CardTitle>
                       
                        <span style={{color:'white',fontSize:'15px',fontWeight:'bold'}}>
                          USDT has become stable currency
                          <br></br>
                          <a
                            style={{color:'#e67516',fontWeight:'bold'}} 
                            href="">
                            see more..
                          </a>
                        </span>
                       
                      </div>
                      
                    </Row>
                    
                  </CardBody>
                </Card> */}
              {/* </Col> */}
              {/* <Col>
                
              </Col> */}
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
                          TOTAL DEBIT
                        </CardTitle>
                        <span style={{fontSize:'24px',color:'#162a9e',fontWeight:'bold'}}>
                        <i className="fas fa-arrow-circle-up" /> 
                        <span style={{color:'black',fontWeight:'normal',marginLeft:'5px'}}>$43.90</span>
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
                          {/* <Balances/> */}
                          TOTAL CREDIT
                        </CardTitle>
                        <span style={{fontSize:'24px',color:'#e67516',fontWeight:'bold'}}>
                        <i className="fas fa-arrow-circle-down" />
                        <span style={{color:'black',fontWeight:'normal',marginLeft:'5px'}}>$243.98</span>
                      </span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              </Row>
              
              </Col>{" "}
              
              
            <Row style={{marginRight:'10px'}}>
            <Col  lg="8" xl="12" >
                <Card className="card-stats mb-4 mb-xl-0" style={{marginTop:'22px'}}>
                  <CardBody style={{borderRadius:'10px'}}>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                          
                        >
                          wallet details
                        </CardTitle>
                        <span style={{color:'black',fontWeight:'bold',fontSize:'1.2rem'}}>
                          CIMA Wallet
                        </span>
                        <br></br>
                        <span>
                          FIAT CURRENCY {'<'}={'>'} USDT
                        </span>
                        <br></br>
                        
                        
                        
                        <div style={{padding:'12px'}}>
                        <Button style={{borderRadius:'10px',width:'190px',fontSize:'18px',backgroundColor:'#e67516',color:'white'}} >WITHDRAW</Button>
                        </div>
                      </div>
                      <Col className="col-auto">
                        <div style={{textAlign:"end",textTransform:"uppercase"}}>
                          Available Funds
                        </div>
                        {/* <br></br> */}
                        
                        <span style={{color:'black',fontWeight:'bold',fontSize:'1.6rem',marginLeft:'40px'}}>
                        USDC
                        </span>{" "}
                        <span style={{color:'black',fontWeight:'bold',fontSize:'1.5rem',}}>
                        150.00
                        </span>
                       <br></br>
                       <br></br>
                      
                        <div>
                        <Button style={{borderRadius:'10px',width:'190px',fontSize:'18px',backgroundColor:'#162a9e',color:'white'}} onClick={toggle}>DEPOSIT</Button>
      <Modal isOpen={modal} toggle={toggle}>
        {/* <ModalHeader style={{fontSize:'100px'}} toggle={toggle}>CIMA WALLET</ModalHeader> */}
        <ModalBody>
         <Deposit/>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Deposit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> */}
      </Modal>
                        {/* <button 
                        onClick={() =>  {
                          setModalOpen(true);
                        }}
                        style={{borderRadius:'10px',width:'190px',fontSize:'18px',backgroundColor:'#162a9e',color:'white'}}> DEPOSIT</button>
                         {modalOpen && <Deposit setOpenModal={setModalOpen} />} */}
                      </div>
                      </Col>
                    </Row>
                   
                    {/* <Col xl="20" style={{height:'5px'}}>
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      
                    </h6>
                    <h2 className="mb-0">Total Expenses</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col> */}
                  </CardBody>
                </Card>
              </Col>
              </Row>

            </Row>
            
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
