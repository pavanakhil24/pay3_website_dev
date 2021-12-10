import React, { useState } from "react";
// plugin that creates slider
import Slider from "nouislider";
// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components

function Deposit() {

    const updateBalance = async event =>{
        event.preventDefault()
        
    }
    const [amnt, setAmnt] = useState('')
    const toggle= () => setAmnt('20');

  React.useEffect(() => {
    Slider.create(document.getElementById("sliderRegular"), {
      start: [0],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 },
    });
    // Slider.create(document.getElementById("sliderDouble"), {
    //   start: [20, 60],
    //   connect: [false, true, false],
    //   step: 1,
    //   range: { min: 0, max: 100 },
    // });
  }, []);
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
    <span style={{fontSize:'18px'}}>Deposit to your wallet</span>
    <br></br>
    <span style={{fontSize:'16px'}}>Custom deposit amount($ 10-$ 100,000,000)</span>
    <br></br>
    <br></br>
    <form action={"http://localhost:5000/employee/SCEPMXVBXWL4CMEKOWHMMLB5K3JCX7NDIWFV3JCUSW5Y4LWFTDRH73SJ/fundingbalance/"+amnt} method="GET">
      <label for="amount">Amount:</label>
        <input id="amount" type="text"  required  />
        <button style={{color:'#162a9e'}} type="submit" onClick={toggle}>Deposit</button>
    </form>
      <div className="slider input-slider--" id="sliderRegular"></div>
      {/* <br></br>
      <div className="slider input-slider--" id="sliderDouble"></div> */}
    </div>
    </>
  );
}

export default Deposit;