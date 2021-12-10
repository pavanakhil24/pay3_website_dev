import React, { Component } from "react";
import { useState } from "react";
import "./App.css";
import { Button } from "reactstrap"; 
import Link from "next/link";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useRouter } from 'next/router'
import SocialLogin from "./socialsignin";
import { Row,Col } from "reactstrap";
// import Facebook from "../../pages/admin/facebooklogin";
// import { useState } from "react";

function Tabs() {
  
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  // constructor(props) {
  //   super(props);
  //   this.state = { email: false };
  // }
  // handleValidSubmit = (event, values) => {
  //   this.setState({ email: values.email });
  //   router.push(href)
  //   console.log(`Login Successful`);
  // };

  // handleInvalidSubmit = (event, errors, values) => {
  //   this.setState({ email: values.email, error: true });
  //   console.log(`Login failed`);
  // };

  return (
    <Row>
      <Col>
      <div style={{color:'white',fontsize:'18px',fontWeight:'bold',textAlign:'center'}}>
            <div>
                    <img style={{height:'130px'}}
                      alt="..."
                      src={require("assets/img/theme/pay3.png")}
                    />
                    </div>
                   {" "}
                  
                
              </div>
      {/* <img style={{height:'70px'}}
                      alt="..."
                      src={require("assets/img/theme/pay3logo.png")}
                    />
                     <div style={{color:'black',fontsize:'18px',marginLeft:'270px',fontWeight:'bold'}}>
          PAY3 LOGIN</div> */}
      
    <div className="container" style={{height:'450px'}}>
    
      <div className="bloc-tabs">
        
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Individual
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Company
        </button>
       
      </div>
      
      <div className="content-tabs">
        <Row>
          
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {/* <br></br>
           <div style={{marginLeft:'176px'}}>
            <SocialLogin/> */}
            {/* <Facebook/> */}
          {/* </div>
          <br></br>
          <span style={{padding:'20px',fontSize:'15px',fontWeight:'bold',marginLeft:'187px',color:'black',marginTop:'170px'}}>--OR--</span>
         <br></br> */}
         <AvForm
        // onValidSubmit={this.handleValidSubmit}
        // onInvalidSubmit={this.handleInvalidSubmit}
      >
        <AvField
          name="email"
          label="Email"
          type="text"
          validate={{
              
            required: true,
            email: true
          }}
        />
        <AvField
          name="password"
          label="Password"
          type="password"
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter your password"
            },
          }}
          />
          <Row>
          <Col>
          <Link href='#'>Forgot password</Link>
          </Col>
          <Col >
          <div style={{textAlign:'end'}}>
          <Link href='/admin/register' >Sign Up</Link>
          </div>
          </Col>
          </Row>
          <br></br>
         
          <Button id="submit" href="/admin/dashboard2" style={{marginLeft:'180px',backgroundColor:'#162a9e',color:'white'}}>Submit</Button>
          <br></br>
          <span style={{padding:'20px',fontSize:'15px',fontWeight:'bold',marginLeft:'187px',color:'black',marginTop:'170px'}}>--OR--</span>
          <br></br>
           <div style={{marginLeft:'176px'}}>
            <SocialLogin/>
          </div>
          {/* <br></br>
         <span style={{padding:'20px',fontSize:'18px',fontWeight:'bold',marginLeft:'200px',color:'black',marginTop:'170px'}}>or</span>
          <div style={{marginLeft:'176px'}}>
            <SocialLogin/>
          </div> */}
        </AvForm>
        </div>
       
        <Col className="col-auto">
         {/* <div style={{marginLeft:'176px'}}>
            <SocialLogin/> */}
            {/* <Facebook/> */}
          {/* </div> */}
        </Col>
        </Row>
        

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          
         
   
        
           <AvForm
        // onValidSubmit={this.handleValidSubmit}
        // onInvalidSubmit={this.handleInvalidSubmit}
      >
        <AvField
          name="email"
          label="Email"
          type="text"
          validate={{
              
            required: true,
            email: true
          }}
        />
        <AvField
          name="password"
          label="Password"
          type="password"
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter your password"
            },
          }}
          />
           <Row>
          <Col>
          <Link href='#'>Forgot password</Link>
          </Col>
          <Col >
          <div style={{textAlign:'end'}}>
          <Link href='/admin/signin' >Sign Up</Link>
          </div>
          </Col>
          </Row>
          <br></br>
          {/* <br></br> */}
          <Button id="submit" href="/admin/dashboard" style={{marginLeft:'180px',backgroundColor:'#162a9e',color:'white'}}>Submit</Button>
          <br></br>
          <span style={{padding:'20px',fontSize:'15px',fontWeight:'bold',marginLeft:'187px',color:'black',marginTop:'170px'}}>--OR--</span>
          <br></br>
           <div style={{marginLeft:'176px'}}>
            <SocialLogin/>
          </div>
          {/* <br></br>
         <span style={{padding:'20px',fontSize:'18px',fontWeight:'bold',marginLeft:'200px',color:'black',marginTop:'170px'}}>or</span>
          <div style={{marginLeft:'176px'}}>
            <SocialLogin/>
          </div> */}
        {/* <p style={{padding:'20px',fontSize:'18px',fontWeight:'bold',marginLeft:'150px',color:'black',marginTop:'170px'}}>or</p>
       
        
        
        <div style={{marginLeft:'110px',marginTop:'170px',padding:'20px'}}>
        <SocialLogin/>
        </div> */}
        
        </AvForm>
        </div>


      </div>
    </div>
    </Col>
        {/* <Col>
        <p style={{padding:'20px',fontSize:'18px',fontWeight:'bold',marginLeft:'150px',color:'black',marginTop:'170px'}}>or</p>
       
        </Col>
        <Col>
        <div style={{marginLeft:'110px',marginTop:'170px',padding:'20px'}}>
        <SocialLogin/>
        </div>
        </Col> */}
        </Row>

  );
}

export default Tabs;



// function Tabs() {
//   const [toggleState, setToggleState] = useState(1);

//   const toggleTab = (index) => {
//     setToggleState(index);
//   };

//   return (
//     <div className="container">
//       <div className="bloc-tabs">
//         <button
//           className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
//           onClick={() => toggleTab(1)}
//         >
//           USER
//         </button>
//         <button
//           className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
//           onClick={() => toggleTab(2)}
//         >
//           MRC 
//         </button>
       
//       </div>

//       <div className="content-tabs">
//         <div
//           className={toggleState === 1 ? "content  active-content" : "content"}
//         >
//           <h2>Content 1</h2>
//           <hr />
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
//             praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
//             vel voluptatum?
//           </p>
//         </div>

//         <div
//           className={toggleState === 2 ? "content  active-content" : "content"}
//         >
//           <h2>Content 2</h2>
//           <hr />
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
//             voluptatum qui adipisci.
//           </p>
//         </div>

        
//       </div>
//     </div>
//   );
// }

// export default Tabs;