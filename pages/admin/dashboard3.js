import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";
// reactstrap components
import {
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
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin3.js";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample3,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header3.js";

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
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
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
          <Row>
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
              <Col xl="5">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                   
                    <h3 style={{fontSize:'20px'}} >Cash Flow</h3>
                  </div>
                  <br></br>
                  </Row>
                  <Row>
                  
              {/* <Col lg="7" xl="4">
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
              </Col> */}
              <Col lg="3" xl="4">
                <Card className="card-stats mb-4 mb-xl-0" >
                  <CardBody >
                    <Row>
                      <div className="col">
                      <button style={{backgroundColor:'#162a9e',color:'#162a9e'}}>""</button>
                      <br></br>
                      <span style={{color:'black',fontSize:'18px'}}>DEBIT</span>
                      <br></br>
                      <button style={{backgroundColor:'#e67516',color:'#e67516'}}>""</button>
                      <span style={{color:'black',fontSize:'18px'}}>CREDIT</span>
                                       
                      
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              </Row>
                {/* </Row> */}
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div >
                  <Doughnut
                    data={chartExample3.data}
                    options={chartExample3.options}
                    style={{color:'red'}}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
            {/* </Card>
          </Col> */}
          <Col className="mb-5 mb-xl-0" xl="6">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 style={{fontSize:'20px'}}>Last Transactions</h3>
                  </div>
                  <div >
                    <Button
                      style={{backgroundColor:'#162a9e',color:'white'}}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>Date</th>
                    
                    <th scope="col">Currency</th>
                    {/* <th scope="col">Type</th> */}
                    <th scope="col">Amount</th>
                    <th scope="col">Id</th>
                  </tr>
                </thead>
                <tbody>
                {/* <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>12/11/2021</td>
                                    
                                    <td>ETH</td> 
                                   
                                    <td style={
                                        {color: '#e67516'}
                                    }>
                                        <b>0.0002</b>
                                    </td>
                                    <td>0x54512153e61a7dC0240643E5467DBC2E7B7AF892</td>
                  </tr>
                   
                <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>11/11/2021</td>
                                    
                                    <td>ETH</td> 
                                   
                                    <td style={
                                        {color: '#162a9e'}
                                    }>
                                        <b>0.0002</b>
                                    </td>
                                    <td>0x188ef9ca7aad8db5ad1dd6d34e638189b391651ee48f03e5fb7dc304a05daf9c</td>
                  </tr>
                  <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>11/11/2021</td>
                                    
                                    <td>ETH</td> 
                                   
                                    <td style={
                                        {color: '#162a9e'}
                                    }>
                                        <b>0.0002</b>
                                    </td>
                                    <td>0x5027feb87f07c1bfe63d17213b163a62eb3c21afab9a57f16cfb0a6058e6a14e</td>
                  </tr> */}
                  {/* <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>11/11/2021</td>
                                    
                                    <td>ETH</td> 
                                   
                                    <td style={
                                        {color: '#162a9e'}
                                    }>
                                        <b>0.0002</b>
                                    </td>
                                    <td>0x803adc12e12ad9ce10b500c5045c8830ab7c0b921b9204f36784f0f5c7e89d9b</td>
                  </tr> */}
                  {/* <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>Today</td>
                                    <td>162565886543699978</td>
                                    <td>USDC</td>
                                    <td style={
                                        {color: '#e67516'}
                                    }>
                                        <b>Credited</b>
                                    </td>
                                    <td style={
                                        {color: '#e67516'}
                                    }>
                                        <b>+$ 243.98</b>
                                    </td>
                  </tr> */}
                  {/* <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>10/10/2021</td>
                                    <td>#123466</td>
                                    <td>USDC</td>
                                    <td style={
                                        {color: '#162a9e'}
                                    }>
                                        <b>Credited</b>
                                    </td>
                                    <td style={
                                        {color: '#162a9e'}
                                    }>
                                        <b>+$ 100</b>
                                    </td>
                  </tr>
                  <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>09/10/2021</td>
                                    <td>#1222456</td>
                                    <td>USDC</td>
                                    <td style={
                                        {color: '#e67516'}
                                    }>
                                        <b>Debited</b>
                                    </td>
                                    <td style={
                                        {color: '#e67516'}
                                    }>
                                        <b>-$ 150</b>
                                    </td>
                  </tr>
                  <tr>
                  <td style={{color:'black',fontWeight:'bold',fontSize:'12px'}}>08/10/2021</td>
                                    <td>#12345678</td>
                                    <td>USDC</td>
                                    <td style={
                                        {color: '#e67516'}
                                    }>
                                        <b>Debited</b>
                                    </td>
                                    <td style={
                                        {color: '#e67516'}
                                    }>
                                        <b>-$ 10</b>
                                    </td>
                  </tr> */}
                </tbody>
              </Table>
            </Card>
          </Col>
         
        </Row>
      </Container>
    </>
  );
};

Dashboard.layout = Admin;

export default Dashboard;
