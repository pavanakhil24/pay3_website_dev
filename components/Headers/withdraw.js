import React, { useState } from "react";
// plugin that creates slider
// import Slider from "nouislider";
// import { Button } from "reactstrap";
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
  Modal,
  ModalHeader, 
  ModalBody, 
  ModalFooter
} from "reactstrap";
import Deposit from "./withdrawsuccess";
// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components

function Withdraw() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
   
  // React.useEffect(() => {
  //   Slider.create(document.getElementById("sliderRegular"), {
  //     start: [0],
  //     connect: [true, false],
  //     step: 1,
  //     range: { min: 0, max: 100 },
  //   });
    // Slider.create(document.getElementById("sliderDouble"), {
    //   start: [20, 60],
    //   connect: [false, true, false],
    //   step: 1,
    //   range: { min: 0, max: 100 },
    // });
  // }, []);
  return (
    <>
    {/* <div> */}
            {/* <h1>CIME WALLET</h1>
            <br></br> */}
            {/* <span>Deposit to your wallet</span> */}
            {/* <br></br>
            <p>Custom deposit amount($10-$100,000,000)</p> */}
        {/* </div> */}
    <div >
    <span style={{fontSize:'24px',fontWeight:'bold'}}>CIMA WALLET</span>
    <br></br>
    <br></br>
    <span style={{fontSize:'18px'}}>The Amount will be transeferred to the corresponding address</span>
    <br></br>
    <br></br>
    <form >
      <label for="amount">Address: 0x54512153e61a7dC0240643E5467DBC2E7B7AF892 </label>{" "}
        {/* <input id="amount" type="text"  required  />{" "} */}
        {/* <Button style={{backgroundColor:'#162a9e',color:'white'}} type="submit" onClick={toggle}>PAY</Button> */}
    </form>
    <form >
      <label for="amount">Amount:</label>{" "}
        <input id="amount" type="text"  required  />{" "}
        <Button style={{backgroundColor:'#162a9e',color:'white'}} type="submit" onClick={toggle}>SEND</Button>
        <Modal isOpen={modal} toggle={toggle}>
      
      <ModalBody>
       <Deposit/>
      </ModalBody>
    </Modal>
    </form>
      {/* <div className="slider input-slider--" id="sliderRegular"></div> */}
      {/* <br></br>
      <div className="slider input-slider--" id="sliderDouble"></div> */}
    </div>
    </>
  );
}

export default Withdraw;

