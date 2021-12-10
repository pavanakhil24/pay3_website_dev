import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
import Link from "next/link";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardText,
  CardTitle,
  Modal,
  ModalHeader, 
  ModalBody, 
  ModalFooter
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import Deposit1 from "components/Headers/deposit1.js";
import Deposit2 from "../../components/Headers/deposit2";
import Deposit5 from "../../components/Headers/deposit5";
import Deposit6 from "../../components/Headers/deposit6";
// import Deposit2 from "components/Headers/deposit1.js";
import Deposit3 from "../../components/Headers/deposit3";
import Deposit4 from "../../components/Headers/deposit4";
import CsvReader from "./csvfile";
// import Deposit5 from "components/Headers/deposit5.js";
// import Deposit6 from "components/Headers/deposit6.js";

const Dashboard = (props) => {
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);

  };
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Header />
      <br></br>
      {/* Page content */}
      <Container className="mt--8" fluid>
        {/* <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Sales value</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody> */}
                {/* Chart */}
                {/* <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>*/}        
          {/* <Row> */}
           {/* <Col xl="4">
            <Card className="shadow"> */}
              {/* <CardHeader className="border-0"> */}
                {/* <Row className="align-items-center"> */} 
                  {/* <div className="col">
                    <h3 className="mb-0">Social traffic</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div> */}
                {/* </Row>
              </CardHeader> */}
              {/* <Col xl="5">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col"> */}
                    {/* <h6 >
                      Performance
                    </h6> */}
                    {/* <h3 style={{fontSize:'20px'}} >Cash Flow</h3>
                  </div>
                  <br></br>
                  </Row> */}
                  {/* <Row>
                  
              <Col lg="7" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody >
                    <Row>
                      <div className="col">
                      <CardTitle style={{fontSize:'18px'}}>
                          Weekly
                        </CardTitle>                       
                        <span style={{color:'black'}}>$ 1487.96</span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody >
                    <Row>
                      <div className="col">
                      <CardTitle style={{fontSize:'18px'}}>
                          Monthly
                        </CardTitle>                       
                        <span style={{color:'black'}}>$ 7,400.00</span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" xl="4">
                <Card className="card-stats mb-4 mb-xl-0" >
                  <CardBody >
                    <Row>
                      <div className="col">
                      <button style={{backgroundColor:'#24539E',color:'#24539E'}}>""</button>{" "}
                      <span style={{color:'black',fontSize:'18px'}}>DEBIT</span>{" "}
                      <button style={{backgroundColor:'#e67516',color:'#e67516'}}>""</button>{" "}
                      <span style={{color:'black',fontSize:'18px'}}>CREDIT</span>
                                       
                      
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              </Row>
                {/* </Row> */}
              {/* </CardHeader>
              <CardBody> */}
                {/* Chart */}
                {/* <div >
                  <Doughnut
                    data={chartExample2.data}
                    options={chartExample2.options}
                    style={{color:'red'}}
                  />
                </div>
              </CardBody>
            </Card>
          </Col> */} 
            {/* </Card>
          </Col> */}
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 style={{fontSize:'20px',marginLeft:'17px'}}> Make a Payment</h3>
                    <span style={{marginLeft:'17px'}}>(upload the payment file)</span>
                  </div>
                  <div  style={{textAlign:'end',position:'revert'}}>
                  <CsvReader/>
              </div>
                  <span style={{fontSize:'24px',color:'#24539E',fontWeight:'bold'}}>
                
                  
                  </span> 
                 
                  {/* <span style={{fontSize:'24px',color:'#24539E',fontWeight:'bold'}}>
                        <Button style={{backgroundColor:'#24539E',color:'#24539E',height:'40px'}}>
                          <i className="ni ni-fat-add" style={{fontSize:'24px',color:'white',fontWeight:'bold'}}/>
                        </Button>
                        
                  </span> */}
                  {/* <i className="fa-thin fa-file-plus" /> */}
                  
                  {/* <div >
                    <Button
                      style={{backgroundColor:'#24539E',color:'white'}}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div> */}
                </Row>
              </CardHeader>
              <Row>
              
              </Row>
              {/* <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Wallet Address</th>
                    <th scope="col">Currency</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Pay</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>1</td>
                                    <td>James </td>
                                    <td>0xf4b5a569f48b8dd22ec0334aef3e7903d425774a </td>
                                    <td>ETH</td>
                                    <td style={{fontWeight:'bold'}}>
                                        0.02
                                    </td>
                                    <td>
                                    <Nav  navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle  nav>
                <Media className="align-items-center">
                  <div >
                   <Button style={{borderRadius:'10px',fontSize:'14px',backgroundColor:'#24539E',color:'white'}}>Pay</Button>
                  </div>
                 
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <Button href="/admin/transaction">
                  <DropdownItem>
                    <i className="ni ni-fat-add" />
                    <span>Direct Deposit</span>
                  </DropdownItem>
                </Button>
                <Button onClick={toggle}>
                  <DropdownItem>
                    <i className="ni ni-curved-next" />
                    <span>Pay from wallet</span>
                    <Modal isOpen={modal} toggle={toggle}>
      
      <ModalBody>
       <Deposit1/>
      </ModalBody>
    </Modal>
                  </DropdownItem>
                </Button>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
         
                                    </td>
                                   
                  </tr>
                  <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>2</td>
                                    <td>Micheal</td>
                                    <td>0x1d99da0edd98140c666bc2049cd93ec518700b24</td>
                                    <td>ETH</td>
                                    <td style={{fontWeight:'bold'}}>
                                        0.02
                                    </td>
                                    <td>
                                    <Button  style={{borderRadius:'10px',fontSize:'14px',backgroundColor:'#24539E',color:'white'}} onClick={toggle}>PAY</Button>
      <Modal isOpen={modal} toggle={toggle}>
      
        <ModalBody>
         <Deposit1/>
        </ModalBody>
      </Modal>
                                    </td>
                                    
                  </tr>
                  <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>3</td>
                                    <td>Cooper</td>
                                    <td>0xdc254dbf3131f36bb4e04aee2c64d3343aea0aae</td>
                                    <td>ETH</td>
                                    <td style={{fontWeight:'bold'}}>
                                        0.02
                                    </td>
                                    <td>
                                    <Button  style={{borderRadius:'10px',fontSize:'14px',backgroundColor:'#24539E',color:'white'}} onClick={toggle}>PAY</Button>
      <Modal isOpen={modal} toggle={toggle}>
      
        <ModalBody>
         <Deposit1/>
        </ModalBody>
      </Modal>
                                    </td>
                  </tr>
                  <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>4</td>
                                    <td>Pavan</td>
                                    <td>0x76f776747568eb56f87455a66ba9a1554e90ac6f</td>
                                    <td>ETH</td>
                                    <td style={{fontWeight:'bold'}}>
                                        0.02
                                    </td>
                                    <td>
                                    <Button  style={{borderRadius:'10px',fontSize:'14px',backgroundColor:'#24539E',color:'white'}} onClick={toggle}>PAY</Button>
      <Modal isOpen={modal} toggle={toggle}>
      
        <ModalBody>
         <Deposit1/>
        </ModalBody>
      </Modal>
                                    </td>
                  </tr>
                  <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>5</td>
                                    <td>AKhil</td>
                                    <td>0xde814cc2091aa4a56431a1c047d7d571bfc4005d</td>
                                    <td>ETh</td>
                                    <td style={{fontWeight:'bold'}}>
                                        0.02
                                    </td>
                                    <td>
                                    <Button style={{borderRadius:'10px',fontSize:'14px',backgroundColor:'#24539E',color:'white'}} onClick={toggle}>PAY</Button>
      <Modal isOpen={modal} toggle={toggle}>
      
        <ModalBody>
         <Deposit1/>
        </ModalBody>
      </Modal>
                                    </td>
                  </tr>
                  <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>6</td>
                                    <td>Charlie</td>
                                    <td>0xf4b5a569f48b8dd22ec0334aef3e7903d425774a</td>
                                    <td>ETh</td>
                                    <td style={{fontWeight:'bold'}}>
                                        0.02
                                    </td>
                                    <td>
                                    <Button style={{borderRadius:'10px',fontSize:'14px',backgroundColor:'#24539E',color:'white'}} onClick={toggle}>PAY</Button>
      <Modal isOpen={modal} toggle={toggle}>
      
        <ModalBody>
         <Deposit6/>
        </ModalBody>
      </Modal>
                                    </td>
                  </tr>
                </tbody>
              </Table> */}
            </Card>
          </Col>
          <br></br>
            <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 style={{fontSize:'20px'}}>Transaction History</h3>
                  </div>
                  {/* <div >
                    <Button
                      style={{backgroundColor:'#24539E',color:'white'}}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div> */}
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>  
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>                
                    <th scope="col">Last Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Date</th>
                    <th scope="col">Token</th>
                    <th scope="col">Token Amount</th>
                    <th scope="col">Fiat </th>
                    <th scope="col">Fiat Amount</th>
                    <th scope="col">Type</th>
                    <th scope="col">Status</th>
                    
                    </tr>
                </thead>
                <tbody>
                   {/*
                   <tr>
                <td>1</td>
                <td>Chris</td>
                <td>Evans</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>2</td>
                <td>Tom</td>
                <td>Holland</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                    <tr>
                <td>3</td>
                <td>Pavan</td>
                <td>Akhil</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>4</td>
                <td>Gururaj</td>
                <td>Potnis</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                  <tr>
                <td>5</td>
                <td>James</td>
                <td>Bond</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>6</td>
                <td>Daniel</td>
                <td>Craig</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                  <tr>
                <td>7</td>
                <td>Naruto</td>
                <td>Uzumaki</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>8</td>
                <td>Sasuke</td>
                <td>Uchiha</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                   <tr>
                <td>9</td>
                <td>Monica</td>
                <td>Geller</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>10</td>
                <td>Joey</td>
                <td>Tribbiani</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                   <tr>
               
        
                
       
        
         */} 
                    {/*
                    <tr>
                <td>1</td>
                <td>Pavan</td>
                <td>Akhil</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>2</td>
                <td>Gururaj</td>
                <td>Potnis</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                  <tr>
                <td>3</td>
                <td>James</td>
                <td>Bond</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>4</td>
                <td>Daniel</td>
                <td>Craig</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                  <tr>
                <td>5</td>
                <td>Naruto</td>
                <td>Uzumaki</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>6</td>
                <td>Sasuke</td>
                <td>Uchiha</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                   <tr>
                <td>7</td>
                <td>Monica</td>
                <td>Geller</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>8</td>
                <td>Joey</td>
                <td>Tribbiani</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                   <tr>
                <td>9</td>
                <td>Ross</td>
                <td>Geller</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
         <tr>
                <td>10</td>
                <td>Chandler</td>
                <td>Bing</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        
                
       
        
         */} 
                  {/*
                  <tr>
                <td>1</td>
                <td>James</td>
                <td>Bond</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>2</td>
                <td>Daniel</td>
                <td>Craig</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                  <tr>
                <td>3</td>
                <td>Naruto</td>
                <td>Uzumaki</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>4</td>
                <td>Sasuke</td>
                <td>Uchiha</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                   <tr>
                <td>5</td>
                <td>Monica</td>
                <td>Geller</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>6</td>
                <td>Joey</td>
                <td>Tribbiani</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                   <tr>
                <td>7</td>
                <td>Ross</td>
                <td>Geller</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
         <tr>
                <td>8</td>
                <td>Chandler</td>
                <td>Bing</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>9</td>
                <td>Ross</td>
                <td>Geller</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
         <tr>
                <td>10</td>
                <td>Chandler</td>
                <td>Bing</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                
       
        
         */} 
                  
                  <tr>
                <td>1</td>
                <td>Naruto</td>
                <td>Uzumaki</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>2</td>
                <td>Sasuke</td>
                <td>Uchiha</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                   <tr>
                <td>3</td>
                <td>Monica</td>
                <td>Geller</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>4</td>
                <td>Joey</td>
                <td>Tribbiani</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                   <tr>
                <td>5</td>
                <td>Ross</td>
                <td>Geller</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
         <tr>
                <td>6</td>
                <td>Chandler</td>
                <td>Rogers</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>7</td>
                <td>Ross</td>
                <td>Geller</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
         <tr>
                <td>8</td>
                <td>Chandler</td>
                <td>bing</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                <tr>
                <td>9</td>
                <td>Steve</td>
                <td>Rogers</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
        <td>10</td>
                <td>Tony</td>
                <td>Stark</td>
                  <td>tb1qqs2t5qfdaa4njgct6f6m056vsyp7unm62wdst3</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
       
        
         
                   
                   {/* <tr>
                <td>1</td>
                <td>Monica</td>
                <td>Geller</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>2</td>
                <td>Joey</td>
                <td>Tribbiani</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                   <tr>
                <td>3</td>
                <td>Ross</td>
                <td>Geller</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
         <tr>
                <td>4</td>
                <td>Chandler</td>
                <td>Bing</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
                <td>5</td>
                <td>Ross</td>
                <td>Geller</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
         <tr>
                <td>6</td>
                <td>Chandler</td>
                <td>Bing</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
                <tr>
                <td>7</td>
                <td>Steve</td>
                <td>Rogers</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
        <td>8</td>
                <td>Tony</td>
                <td>Stark</td>
                  <td>tb1qqs2t5qfdaa4njgct6f6m056vsyp7unm62wdst3</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.000039
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
        <td>9</td>
                <td>Steve</td>
                <td>Rogers</td>
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.00019
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
        </tr>
        <tr>
        <td>10</td>
                <td>Tony</td>
                <td>Stark</td>
                  <td>tb1qqs2t5qfdaa4njgct6f6m056vsyp7unm62wdst3</td>
                  <td>10-Dec-2021</td>
                  <td>BTC</td>
                  <td >
                  0.00019
                  </td>
                  <td >USD</td>
                  <td >2</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>Paid</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                
        </tr> */}
        
            
                
        
        
                
                
                 
        
               
               
        {/* <tr>
                  
                  <td>tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</td>
                  <td>02/12/2021</td>
                  <td>BTC</td>
                  <td >
                  0.00001
                  </td>
                  <td >USD</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>100</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
        </tr>
        <tr>
                  
                  <td>tb1qqs2t5qfdaa4njgct6f6m056vsyp7unm62wdst3</td>
                  <td>02/12/2021</td>
                  <td>BTC</td>
                  <td >
                  0.00001
                  </td>
                  <td >USD</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>100</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
        </tr>
                <tr>
                  
                  <td>0xde814cc2091aa4a56431a1c047d7d571bfc4005d</td>
                  <td>02/12/2021</td>
                  <td>ETH</td>
                  <td >
                  0.00002
                  </td>
                  <td >$ 0.900</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>100</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
</tr>
                <tr>
                  
                  <td>0xf4b5a569f48b8dd22ec0334aef3e7903d425774a</td>
                  <td>01/12/2021</td>
                  <td>ETH</td>
                  <td >
                      0.0002
                  </td>
                  <td >$ 0.900</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>100</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
</tr>
                  <tr>
                  
                  <td>0xf4b5a569f48b8dd22ec0334aef3e7903d425774a</td>
                  <td>01/12/2021</td>
                  <td>ETH</td>
                  <td >
                      0.0002
                  </td>
                  <td >$ 0.900</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>100</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
</tr>
                <tr>
                <td>0xf4b5a569f48b8dd22ec0334aef3e7903d425774a</td>
                <td>01/12/2021</td>
                  <td>ETH</td> 
                <td >
                      0.0002
                  </td>
                  <td >$ 0.900</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>100</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
</tr>
<tr>
                  
                  <td>0xcad6636e3c228a03f44158ecd868f271f020098a</td>
                  <td>01/12/2021</td>
                  <td>ETH</td>
                  <td >
                      0.0015
                  </td>
                  <td >$ 7.089</td>
                  <td style={{fontWeight:'bold',color:'#24539E'}}>Deposit</td>
                  <td style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
</tr>
                  <tr>
                  
                                    <td>0xf4b5a569f48b8dd22ec0334aef3e7903d425774a</td>
                                    <td>01/12/2021</td>
                                    <td>ETH</td>
                                    <td >
                      0.0002
                  </td>
                  <td >$ 0.900</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>100</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                                   
                  </tr>
                  <tr>
                
                                    <td>0xcad6636e3c228a03f44158ecd868f271f020098a</td>
                                    <td>31/11/2021</td>
                                    <td>ETH</td>
                                    <td >
                      0.0002
                  </td>
                  <td >$ 0.900</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>100</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                  </tr>
                  <tr> */}
                  {/* <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>367</td> */}
                                    {/* <td>0x20fb9686f8c10ecdf8df67563e901e606c5eec03</td>
                                    <td>31/11/2021</td>
                                    <td>ETH</td>
                                    <td >
                      0.0002
                  </td>
                  <td >$ 0.900</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>100</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                  </tr>
                  <tr>
                  
                                    <td>0x20fb9686f8c10ecdf8df67563e901e606c5eec03</td>
                                    <td>31/11/2021</td>
                                    <td>ETH</td>
                                    <td >
                      0.0002
                  </td>
                  <td >$ 0.900</td>
                  <td style={{fontWeight:'bold',color:'#e67516'}}>100</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                                    
                  </tr>
                  <tr>
                 
                                    <td>0xcad6636e3c228a03f44158ecd868f271f020098a</td>
                                    <td>31/11/2021</td>
                                    <td>ETH</td>
                                    <td >
                      0.1000
                  </td>
                  <td >$ 471.58</td>
                  <td style={{fontWeight:'bold',color:'#24539E'}}>Deposit</td>
                  <td style={{fontWeight:'bold',color:'green'}}>Success</td>
                  </tr> */}
                  {/* <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>123</td>
                                    <td>Andrew Symonds</td>
                                    <td>USDC</td>
                                    <td style={{fontWeight:'bold'}}>
                                        300
                                    </td>
                                   
                  </tr>
                  <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>259</td>
                                    <td>Jimmy Brews</td>
                                    <td>USDC</td>
                                    <td style={{fontWeight:'bold'}}>
                                        250
                                    </td>
                                   
                  </tr> */}

                </tbody>
              </Table>
            </Card>
          </Col>
          {/* <Col xl="15">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                   
                    <h3 style={{fontSize:'20px'}} >Cash Flow</h3>
                  </div>
                  <br></br>
                  </Row>
                  <Row>
                  <Col lg="3" xl="3">
                <Card className="card-stats mb-4 mb-xl-0" >
                  <CardBody >
                  <Row>
                    <Col>
                      <div >
                      <button style={{backgroundColor:'#24539E',color:'#24539E'}}>'</button>
                      
                      <span style={{color:'black',fontSize:'18px'}}> -DEBIT</span>{" "} */}
                      
                     
                      {/* <span style={{color:'black',fontSize:'18px'}}>CREDIT</span> */}
                                       
                      
                      {/* </div>
                    
                      <br></br>
                     
                      <div >
                      <button style={{backgroundColor:'#e67516',color:'#e67516'}}>'</button>{" "}
                      <span style={{color:'black',fontSize:'18px'}}> -CREDIT</span>
                      </div>
                      </Col> */}
                     
                      {/* <div >
                      <button style={{backgroundColor:'#e67516',color:'#e67516'}}>""</button>
                      <span style={{color:'black',fontSize:'18px'}}>CREDIT</span>  
                      </div> */}
                      
                    {/* </Row>
                  </CardBody>
                </Card>
              </Col>
                  </Row> */}
                {/* </Row> */}
              {/* </CardHeader>
              <CardBody> */}
                {/* Chart */}
                {/* <div >
                  <Doughnut
                    data={chartExample2.data}
                    options={chartExample2.options}
                    style={{color:'red'}}
                  />
                </div>
              </CardBody>
            </Card>
          </Col> */}

                    
                  {/* </Row> */}
      </Container>
    </>
  );
};

Dashboard.layout = Admin;

export default Dashboard;
// var Web3 = require('web3');
// console.log(Web3.version);
// => 1.0.0-beta.34

// const weiValue = Web3.utils.toWei('1', 'ether');
// console.log(weiValue);
// => 1000000000000000000

// const etherValue = Web3.utils.fromWei('1000000000000000000', 'ether');
// console.log(etherValue);
