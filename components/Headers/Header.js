import React, { Component, useState } from "react";
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
import Deposit from "components/Headers/qrdeposit.js";
// import Balances from "components/Headers/balance.js";
export const getStaticProps = async () => {
    
  // const res = await fetch("https://rest.cryptoapis.io/v2/blockchain-data/ethereum/ropsten/addresses/0xcad6636e3c228a03f44158ecd868f271f020098a",{
  //   method:'GET',
  //   headers: {"Content-Type": "application/json","X-API-Key": "6a3a7df1c8d73ca6d4e0898ea96800329cbb95fa"},
    
  // });
  const res = await fetch("https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY=6ea2cbd0-9153-420a-83ea-71dfbc0f345f&amount=1&id=1027&convert_id=2781")
  const data = await res.json();
  return {
    props: {demo: data}
  }
}

//   var https = require("https");

// var options = {
//   "method": "GET",
//   "hostname": "rest.cryptoapis.io",
//   "path": "/v2/blockchain-data/ethereum/ropsten/addresses/0xcad6636e3c228a03f44158ecd868f271f020098a",
//   "qs": [],
//   "headers": {
//     "Content-Type": "application/json",
//     "X-API-Key": "6a3a7df1c8d73ca6d4e0898ea96800329cbb95fa	"
//   }
// };

// var req = https.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });

// req.end();

 


// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import Deposit1 from "./deposit4";
import { Map } from "typescript";
import Withdraw from "./withdraw";
// import Balances from "./balance";



const Header = ({demo}) =>{
  
  
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  
  return (
    <>
    {demo}
      <div className="header pb-8 pt-3 pt-md-3" style={{backgroundColor:'#eeeeef'}}>
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col>
              
              {/* <Col lg="8" xl="12 " > */}
                {/* <Card className="card-stats mb-4 mb-xl-0" >
                  <CardBody style={{backgroundColor:'#24539E',borderRadius:'10px',backgroundImage:'url(https://imgr.search.brave.com/FQ5VO8l534L4tkgxBQP0niVo1cUZZPdJYujw5ufYfdk/fit/711/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/Z1k0Z1R2cUw0UjdG/YTlxbk4tbUZRSGFF/OCZwaWQ9QXBp)',backgroundBlendMode:'color-dodge'}}>
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
              <Col   >
                <Card className="card-stats mb-4 mb-xl-0" style={{padding:'10px',marginLeft:'12px',height:'157px',marginBottom:'100px'}}>
                  <CardBody >
                    <Row>
                      <div className="col">
                        <CardTitle
                          style={{fontSize:'18px'}}
                        >
                          <img style={{width:'30.95px',height:'30.75px'}}
                      alt="..."
                      src={require("assets/img/theme/bitcoin.png")}
                    />
                      <span style={{fontSize:'18px',lineHeight:'24px',marginLeft:'163px',fontWeight:'bold'}}>    TOTAL CREDIT </span>
                        </CardTitle>
                        <span style={{fontSize:'24px',color:'#1DD15A',fontWeight:'bold'}}>
                        
                        {/* <i className="fas fa-arrow-circle-down" />  */}
                        <span style={{color:'#FFB600',fontWeight:'bold',marginLeft:'5px'}}>BTC 
                        </span>
                        <span style={{color:'black',fontWeight:'bold',marginLeft:'5px'}}>
          
                        0.02</span>
                      </span>{" "}
                      
                      
                      <span  style={{color:'#808080',fontWeight:'bold',marginLeft:'120px',fontSize:'20px'}}>
                      USD 1200 
                      </span>
                      <br></br>
                      <span style={{marginLeft:'195px',fontSize:'10px',color:'#808080'}}>
                      <i class="fa fa-clock-o"/>
                        (10-Dec-2021,04:39:56 GMT)</span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>{" "}
              <Col  >
                <Card className="card-stats mb-4 mb-xl-0" style={{padding:'10px',marginRight:'12px',height:'157px'}}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                         
                        >
                          <img style={{width:'30.95px',height:'30.75px'}}
                      alt="..."
                      src={require("assets/img/theme/bitcoin.png")}
                    />
                         <span style={{fontSize:'18px',lineHeight:'24px',marginLeft:'175px',fontWeight:'bold'}}> TOTAL DEBIT</span>
                        </CardTitle>
                        <span style={{fontSize:'24px',color:'#EF5959',fontWeight:'bold'}}>
                        {/* <i className="fas fa-arrow-circle-up" /> */}
                        <span style={{color:'#FFB600',fontWeight:'bold',marginLeft:'5px'}}>
                          {/* ETH 0.0016 */}
                        BTC 
                        </span>
                        <span style={{color:'black',fontWeight:'bold',marginLeft:'5px'}}>
                        0.0006 
                        {/* 0.0008 */}
                        </span>
                      </span>{" "}
                      
                      {/* <br></br> */}
                      <span style={{color:'#808080',fontWeight:'bold',marginLeft:'120px',fontSize:'20px'}}>
                      USD 29
                      {/* USD 41 */}
                      </span>
                      <br></br>
                      <span style={{color:'#808080',marginLeft:'190px',fontSize:'10px'}}>(10-Dec-2021,04:39:56 GMT)</span>
                      </div>
                       <span style={{fontSize:'18px',color:'white',marginBottom:'30px'}}>
                          FIAT CURRENCY {'<'}={'>'} USDT
                        </span>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              </Row>
              
              </Col>{" "}
              
              
            <Row style={{marginRight:'10px'}}>
            <Col   >
                <Card className="card-stats mb-4 mb-xl-2" style={{marginTop:'26px',width:'400px'}}>
                  <CardBody style={{borderRadius:'10px'}}>
                    <Row>
                      <div className="col">
                        <CardTitle
                          
                          
                        >
                          <i class='fas fa-wallet' style={{width:"50px"}}/>
                          {/* <img style={{width:'33.73px',height:'33.73px'}}
                      alt="..."
                      src={require("assets/img/theme/wallet.png")}
                    /> */}
                  <span style={{fontSize:'18px',lineHeight:'24px',marginLeft:'200px',fontWeight:'bold'}}>WALLET</span>
                        </CardTitle>
                       
                        
                        {/* <span style={{fontSize:'18px',color:'white'}}>
                          FIAT CURRENCY {'<'}={'>'} USDT */}
                        {/* </span> */}
                        {/* <br></br> */}
                        {/* <Button onClick={console.log(demo)}>hi</Button> */}
                        <span style={{color:'#FFB600',fontWeight:'bold',fontSize:'24px'}}>
                          BTC
                          </span>
                        <span style={{fontSize:'24px',color:'black',fontWeight:'bold',marginLeft:'5px',}}>
                           0.0194
                           {/* 0.0192 */}
                           {" "}
                        <span style={{color:'#808080', fontWeight:'bold',marginLeft:'40px',fontSize:'20px'}}>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          USD 1171
                          {/* USD 1159 */}
</span><br></br>



<Row>

   <Col><div style={{height:'40px'}}>
                        
                        <Button style={{backgroundColor:'#24539E',marginBottom:'20px',color:'white',height:'40px'}}onClick={toggle}>ADD FUNDS
                                  {/* <i className="ni ni-fat-add" onClick={toggle} style={{fontSize:'20px',color:'white',fontWeight:'bold'}}/> */}
                                </Button>
                                <Modal isOpen={modal} toggle={toggle}  >
              
              <ModalBody>
               <Deposit/>
              </ModalBody>
            </Modal>{" "}
                        
                               
                                </div></Col>
                                <Col>
                                <span style={{color:'#808080',fontSize:'10px',marginLeft:'10px'}}>(10-Dec-2021,04:39:56 GMT)</span>
   </Col>
   </Row>

                        {/* <Button style={{backgroundColor:'#24539E',color:'#24539E',height:'40px'}}>
                          <i className="ni ni-fat-add" onClick={toggle} style={{fontSize:'20px',color:'white',fontWeight:'bold'}}/>
                        </Button>
                        <Modal isOpen={modal} toggle={toggle}  >
      
      <ModalBody>
       <Deposit/>
      </ModalBody>
    </Modal> */}
                        
                        
                  </span>
                  
                        
                        
                        {/* <div style={{fontSize:'18px'}}>
                        Equivalent USD Amount: */}
                        {/* <br></br> */}
                        
                        {/* <div style={{padding:'6px',marginTop:'10px',fontSize:'10px',color:'white'}}>
                          FIAT CURRENCY {'<'}={'>'} USDT
                        </div> */}
                        {/* <Modal isOpen={modal} toggle={toggle}>
                        
      <ModalBody>
       <Withdraw/>
      </ModalBody>
    </Modal> */}
                        {/* </div> */}
                      </div>
                      {/* <Col className="col-auto">
                        <div style={{textAlign:"end",textTransform:"uppercase"}}>
                          Available Funds
                        </div>
                        <br></br>
                        
                        <span style={{color:'black',fontWeight:'bold',fontSize:'24px',marginLeft:'20px'}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        BTC
                        </span>{" "}
                        <span style={{color:'black',fontWeight:'bold',fontSize:'22px',}}>
                        0.0998
                        0.00076
                        </span>
                        <br></br>
                        <div style={{fontSize:'20px',marginTop:'11px',marginBottom:"12px",marginLeft:'231px',color:'#A9A9A9',fontWeight:'bold'}}>
                        USD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;38.99
                        
                        
                        </div>
                         */}
                        {/* <div style={{marginBottom:'10x'}}>hi</div> */}
                        {/* <Button onClick={console.log(articles)}>hi</Button> */}
                        {/* <div style={{marginTop:'13.5px'}}>
                        hi
                        </div> */}
                        {/* <span style={{color:'black',fontSize:'16px',marginLeft:'40px',marginTop:'500px'}}>
                        ETH
                        </span>{" "}
                        <span style={{color:'black',fontSize:'16px',}}> */}
                        {/* 0.0998 */}
                        {/* 0.0996
                        </span> */}
                       {/* <br></br> */}
                       {/* <br></br> */}
                      
                        {/* <div>
                        <span style={{marginLeft:'240px',fontSize:'10px'}}>(10-Dec-2021,04:39:56 GMT)</span>
      */}
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Deposit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> */}
      
                        {/* <button 
                        onClick={() =>  {
                          setModalOpen(true);
                        }}
                        style={{borderRadius:'10px',width:'190px',fontSize:'18px',backgroundColor:'#24539E',color:'white'}}> DEPOSIT</button>
                         {modalOpen && <Deposit setOpenModal={setModalOpen} />} */}
                      {/* </div>
                      </Col> */}
                  
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
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://rest.cryptoapis.io/v2/blockchain-data/ethereum/ropsten/addresses/0xcad6636e3c228a03f44158ecd868f271f020098a`,{
  method: 'GET',
  headers: {'Content-Type': 'application/json', 'X-API-Key': '6a3a7df1c8d73ca6d4e0898ea96800329cbb95fa'},
  })
  const data = await res.json()

  // Pass data to the page via props
  return { props: { articles:data, } }
}
export default Header;
