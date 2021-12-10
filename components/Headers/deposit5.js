import React, { useState } from "react";
// plugin that creates slider
// import Slider from "nouislider";
import { Button } from "reactstrap";
// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components

function Deposit5() {

    const updateBalance = async event =>{
        event.preventDefault()
        
    }
    const [amnt, setAmnt] = useState('')
    const toggle= () => setAmnt('20');

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
    <span style={{fontSize:'18px'}}>Payment</span>
    <br></br>
    <br></br>
    <form >
      <label for="amount">Address: 0xde814cc2091aa4a56431a1c047d7d571bfc4005d</label>{" "}
        {/* <input id="amount" type="text"  required  />{" "} */}
        {/* <Button style={{backgroundColor:'#162a9e',color:'white'}} type="submit" onClick={toggle}>PAY</Button> */}
    </form>
    <form >
      <label for="amount">Amount:</label>{" "}
        <input id="amount" type="text"  required  />{" "}
        <Button style={{backgroundColor:'#162a9e',color:'white'}} type="submit" href="/admin/dashboard">PAY</Button>
    </form>
      {/* <div className="slider input-slider--" id="sliderRegular"></div> */}
      {/* <br></br>
      <div className="slider input-slider--" id="sliderDouble"></div> */}
    </div>
    </>
  );
}

export default Deposit5;