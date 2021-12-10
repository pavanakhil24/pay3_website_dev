import React, { useState } from "react";
// plugin that creates slider
// import Slider from "nouislider";
import { Button,CardTitle,
  Modal,
  ModalHeader, 
  ModalBody, 
  Table,
  ModalFooter,
  Row,
  Col} from "reactstrap";
import Deposit from "./success";
import Link from "next/link";
// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components

function Deposit1() {
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
    
    <div >
    <span style={{fontSize:'24px',fontWeight:'bold',color:'black'}}>ADD FUNDS</span>
    <br></br>
    <br></br>
    <Row>
   
{/* <span style={{color:'black',marginLeft:'205px',fontWeight:'bold'}}>DEMO</span> */}
<Col lg="8" xl="4">
<img style={{width:'200px'}}
                      alt="..."
                      src={require("assets/img/theme/qr.png")}
                      
                    />
</Col>
<Col lg="2" xl="8">
    
    <div style={{marginLeft:'50px',marginTop:'20px'}}>This is address of your safe.Deposit funds by scanning the QR codeor copying the address below. Only send Ether and BTC -20 token to this address
</div>
</Col>
</Row>
<br></br>
<span style={{marginLeft:'10px',color:'blue'}}>0xcad6636e3c228a03f44158ecd868f271f020098a
&nbsp;&nbsp;&nbsp;&nbsp;<i class='fas fa-copy'></i>
&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-share-alt"></i>
</span>
<br></br>
<div style={{textAlign:'center'}}>OR</div>

<div style={{textAlign:'initial',fontSize:'15px'}}>If you want to add funds directly through Fiat Amount
    &nbsp;
    <Link href="/admin/transaction"> 
            <a style={{fontSize:'15px',color:'blue'}}>Click here</a>
    </Link>
    </div>   
    
    {/* <form >
    <label for="amount">1.Name: james</label>{" "}
      <label for="amount"> &nbsp;&nbsp;&nbsp;Address:tb1qpqza8een90yrxd69vvrnhh5ymrj90fegnshcjy</label>{" "}
    </form>
    <form >
      <label for="amount"> &nbsp;&nbsp;&nbsp;Amount:$100</label>{" "}
      </form>
    <form>
      <label for="amount"> &nbsp;&nbsp;&nbsp;Crypto:BTC 0.000001</label>{" "}
             
    </form>
    <form>
    <label for="amount"> &nbsp;&nbsp;&nbsp;Gas Fee:BTC 0.00000546</label>
    <br></br>
    <label for="amount"> &nbsp;&nbsp;&nbsp;Gross Amount:$99.84</label>

    </form>
    <form >
    <label for="amount">2.Name: alex</label>{" "}
      <label for="amount"> &nbsp;&nbsp;&nbsp;Address:tb1qqs2t5qfdaa4njgct6f6m056vsyp7unm62wdst3</label>{" "}
    </form>
    <form >
      <label for="amount"> &nbsp;&nbsp;&nbsp;Amount:$00</label>{" "}
      </form>
    <form>
      <label for="amount"> &nbsp;&nbsp;&nbsp;Crypto:BTC 0.000001</label>{" "}
             
    </form> */}
    <br></br>
    {/* <form> */}
    {/* <label for="amount"> &nbsp;&nbsp;&nbsp;Gas Fee:BTC 0.00000546</label>
    <br></br>
    <label for="amount"> &nbsp;&nbsp;&nbsp;Gross Amount:$99.84</label>
    <br></br> */}
    {/* <form >
    <label for="amount">3.Name: peter</label>{" "}
      <label for="amount"> &nbsp;&nbsp;&nbsp;Address:0x1efbc9afaccc50cd4a2c2b8c354a34a82b3bcce6</label>{" "}
    </form>
    <form >
      <label for="amount"> &nbsp;&nbsp;&nbsp;Amount:$100</label>{" "}
      </form>
    <form>
      <label for="amount"> &nbsp;&nbsp;&nbsp;Crypto:ETH 0.0221</label>{" "}
             
    </form>
    <form>
    <label for="amount"> &nbsp;&nbsp;&nbsp;Gas Fee:ETH 0.00003150000021</label>
    <br></br>
    <label for="amount"> &nbsp;&nbsp;&nbsp;Gross Amount:$99.86</label>

    </form> */}
    {/* <form>
    <label for="amount"> Total Fiat Amount:&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USD 200</label>
    <br></br>
    <label for="amount"> Total Token Amount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC 0.000001</label>
    <br></br>
    <label for="amount"> Total Transaction Fee: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USD 0.31</label>
    <br></br>
    <label for="amount"> Total Amount to be paid:&nbsp;&nbsp;USD 200.31</label>
    </form>
    <br></br>
    <div style={{alignContent:'flex-end'}}>
    <Button style={{marginLeft:'350px',backgroundColor:'#162a9e',color:'white',alignContent:'flex-end'}} type="submit" onClick={toggle}>PAY</Button>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalBody>
       <Deposit/>
      </ModalBody>
    </Modal>
    </div>
    </form> */}
      {/* <div className="slider input-slider--" id="sliderRegular"></div> */}
      {/* <br></br>
      <div className="slider input-slider--" id="sliderDouble"></div> */}
    </div>
    </>
  );
}

export default Deposit1;

