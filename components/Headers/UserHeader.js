// import React from "react";
import React, { useState } from "react";
import Deposit from "components/Headers/createwallet.js";
// reactstrap components
import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Create1 from "./createmetamaskId";
import Create from "./createwallet1";
// import { Button, Container, Row, Col } from "reactstrap";

function UserHeader() {
  const [modal1, setModal1] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
        //  backgroundColor:'#162a9e',
        //  backgroundImage:
            // "url(" + require("assets/img/theme/team-1-800x800.jpg") + ")",
          // backgroundSize: "cover",
          // backgroundPosition: "center top", 
          // backgroundBlendMode:'color-dodge'
        }}
      >
        {/* Mask */}
        <span className="mask opacity-8" style={{backgroundColor:'#162a9e',opacity:'9'}} />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="10" md="15">
              <p style={{color:'white',fontSize:'32px',fontWeight:'bold'}}>Hello Pavan</p>
              <p className="text-white mt-0 mb-5">
                Welcome to CIMA Wallet.This is you Profile
              </p>
              <Button style={{borderRadius:'10px',width:'190px',fontSize:'18px',backgroundColor:'#162a9e',color:'white'}} onClick={toggle1}>Create  Crypto Wallet</Button>
      <Modal isOpen={modal1} toggle={toggle1}>
      <ModalBody>
         <Create/>
        </ModalBody>
        </Modal>
        <br></br>
        <br></br>
        <Button style={{borderRadius:'10px',width:'190px',fontSize:'18px',backgroundColor:'#162a9e',color:'white'}} onClick={toggle}>Add Metamask Wallet</Button>
      <Modal isOpen={modal} toggle={toggle}>
      <ModalBody>
         <Create1/>
        </ModalBody>
        </Modal>
              {/* <Button
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Create Crypto Wallet
              </Button> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default UserHeader;
