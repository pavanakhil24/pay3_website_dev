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
import Admin from "layouts/Admin2.js";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header2.js";

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
                  <div className="col">
                   
                    <h3 style={{fontSize:'20px'}} >Cash Flow</h3>
                  </div>
                  <br></br>
                  </Row>
                  <Row> */}
                  
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
              {/* <Col lg="6" xl="5">
                <Card className="card-stats mb-4 mb-xl-0" >
                  <CardBody >
                    <Row>
                    <Col>
                      <div >
                      <button style={{backgroundColor:'#162a9e',color:'#162a9e'}}>'</button>
                      
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
                    data={chartExample1.data}
                    options={chartExample1.options}
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
                    <h3 style={{fontSize:'20px'}}>Transaction History</h3>
                  </div>
                  {/* <div >
                    <Button
                      style={{backgroundColor:'#162a9e',color:'white'}}
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
                    <th scope="col">Address</th>
                    <th scope="col">Currency</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Fiat Amount</th>
                    <th scope="col">Type</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                {/* <tr>
                  
                  <td>0xcad6636e3c228a03f44158ecd868f271f020098a</td>
                  <td>ETH</td>
                  <td >
                  0.0221
                  </td>
                  <td >$ 99.86</td>
                  <td style={{fontWeight:'bold',color:'#162a9e'}}>Deposited</td>
                  <td  style={{fontWeight:'bold',color:'green'}}>Success</td>
                 
</tr> */}
                

                </tbody>
              </Table>
            </Card>
          </Col>
         
        {/* </Row> */}
      </Container>
    </>
  );
};

Dashboard.layout = Admin;

export default Dashboard;
