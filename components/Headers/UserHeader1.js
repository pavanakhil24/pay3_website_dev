// import React from "react";
import React, { useEffect,useState } from "react";
import Deposit from "components/Headers/createwallet.js";
// reactstrap components
import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { Button, Container, Row, Col } from "reactstrap";

function UserHeader(articles) {

  useEffect(() => {
    (
        async () => {
            try {
                const response = await fetch('http://localhost:8000/api/user', {
                    
                    credentials: 'include',
                });

                const content = await response.json();

                // setMessage(`Hi ${content.name}`);
                setAuth(true);
            } catch (e) {
                // setMessage('You are not logged in');
                // setAuth(false);
            }
        }
    )();
});
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
        //     "url(" + require("assets/img/theme/team-1-800x800.jpg") + ")",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center top", 
        //   backgroundBlendMode:'color-dodge'
        }}
      >
        {/* Mask */}
        <span className="mask opacity-8" style={{backgroundColor:'#162a9e',opacity:'9'}} />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="10" md="15">
              <p style={{color:'white',fontSize:'32px',fontWeight:'bold'}}>Hello James
              {/* Hello James */}
              </p>
              <p className="text-white mt-0 mb-5">
                Welcome to CIMA Wallet.This is you Profile
              </p>
              <span className="text-white mt-0 mb-5">
                Your CIMA Wallet address is
              </span>{" "}
              <span style={{color:'white',fontWeight:'bold'}}>
              {/* "0x1efbc9afaccc50cd4a2c2b8c354a34a82b3bcce6" */}
              {/* {articles.data.item.address} */}
              
              {/* "0x85e61ef01347ae2a42919452719614f55cb9d290" */}
              </span>
              <br></br>
              {/* <span className="text-white mt-0 mb-5">
                Your metamask address is
              </span>{" "}
              <span style={{color:'white',fontWeight:'bold'}}>
              "0x54512153e61a7dC0240643E5467DBC2E7B7AF892"
              </span> */}
              {/* <Button style={{borderRadius:'10px',width:'190px',fontSize:'18px',backgroundColor:'#162a9e',color:'white'}} onClick={toggle}>Create  Crypto Wallet</Button>
      <Modal isOpen={modal} toggle={toggle}>
      <ModalBody>
         <Deposit/>
        </ModalBody>
        </Modal> */}
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
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://rest.cryptoapis.io/v2/wallet-as-a-service/wallets/617badf12e781200069c317d/ethereum/ropsten/addresses`,{
  method: 'POST',
  headers: {'Content-Type': 'application/json', 'X-API-Key': '6a3a7df1c8d73ca6d4e0898ea96800329cbb95fa'},
  })
  const data = await res.json()

  // Pass data to the page via props
  return { props: { articles:data, } }
}
export default UserHeader;
