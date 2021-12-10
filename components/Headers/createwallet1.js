import React, { useState } from "react";
import Deposit from "components/Headers/createwallet.js";
import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// plugin that creates slider
import Slider from "nouislider";
// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components

function Create() {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // const updateBalance = async event =>{
    //     event.preventDefault()
        
    // }
    // const [amnt, setAmnt] = useState('')
    // const toggle= () => setAmnt('20');

//   React.useEffect(() => {
//     Slider.create(document.getElementById("sliderRegular"), {
//       start: [0],
//       connect: [true, false],
//       step: 1,
//       range: { min: 0, max: 100 },
//     });
    // Slider.create(document.getElementById("sliderDouble"), {
    //   start: [20, 60],
    //   connect: [false, true, false],
    //   step: 1,
    //   range: { min: 0, max: 100 },
    // });
//   }, []);
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
   
    <br></br>
    <form  >
      <label for="amount">Name:</label>
        <input id="amount" type="text"  required  />
        <Button style={{backgroundColor:'#162a9e',color:'white'}} type="submit" href="/admin/pprofile2">create</Button>
        
    </form>
      {/* <div className="slider input-slider--" id="sliderRegular"></div> */}
      {/* <br></br>
      <div className="slider input-slider--" id="sliderDouble"></div> */}
    </div>
    </>
  );
}

export default Create;