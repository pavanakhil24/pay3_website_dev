import React, {SyntheticEvent, useState, Component} from "react";
import { Button } from "reactstrap"; 
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useRouter } from 'next/router'
import SocialLogin from "./socialsignin";
import { Row,Col } from "reactstrap";

export default class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: false };
  }

  handleValidSubmit = (event, values) => {
    this.setState({ email: values.email });
    router.push(href)
    console.log(`Login Successful`);
  };

  handleInvalidSubmit = (event, errors, values) => {
    this.setState({ email: values.email, error: true });
    console.log(`Login failed`);
  };

  render() {
    return (
      <Row>
      <Col>
      <AvForm
        onValidSubmit={this.handleValidSubmit}
        onInvalidSubmit={this.handleInvalidSubmit}
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
          name="firstname"
          label="First Name"
          type="text"
          validate={{
              
            required: true,
            email: true
          }}
        />
        <AvField
          name="lastname"
          label="Last Name"
          type="text"
          validate={{
              
            required: true,
            email: true
          }}
        />
        <AvField
          name="mobile number"
          label="Mobile Number"
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
        //     pattern: {
        //       value: "^[A-Za-z0-9]+$",
        //       errorMessage:
        //         "Your password must be composed only with letter and numbers"
        //     },
        //     minLength: {
        //       value: 6,
        //       errorMessage: "Your password must be between 6 and 16 characters"
        //     },
        //     maxLength: {
        //       value: 16,
        //       errorMessage: "Your password must be between 6 and 16 characters"
        //     }
        //   }}
          }}
        />
        <Button id="submit" href="/admin/dashboard3" style={{backgroundColor:'#162a9e',color:'white',marginLeft:'110px'}}>Submit</Button>
          <br></br>
        
       
        </AvForm>
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
}
