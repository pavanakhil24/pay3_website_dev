import React, {SyntheticEvent, useState} from 'react';
import { Container, Row, Col, Jumbotron, Card, CardBody,Button } from "reactstrap";
import {useRouter} from "next/router";
import "../../components/loginform/App.css"


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        
        await fetch('http://localhost:8000/api/register', {
            method: "POST",
            mode: "no-cors",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            }) 
                      
        });

        await router.push('/admin/login');
    }

    return (
        <div className="App" >
             <Jumbotron style={{backgroundColor:'#162a9e',height:'700px'}}>
            <div style={{color:'white',fontSize:'18px',fontWeight:'bold'}}>
                 CIMA WALLET SIGNUP
              </div>

              <Card style={{height:'500px',alignContent:'center'}}>
                <CardBody>
                <Row>
      <Col>
                <div className="container" style={{height:'495px'}}>
    
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
            <form onSubmit={submit}>
                <br></br>
                <input className="form-control" placeholder="Name" required
                       onChange={e => setName(e.target.value)} style={{width:'495px'}}
                />
                <br></br>
                <input type="email" className="form-control" placeholder="Email" required
                       onChange={e => setEmail(e.target.value)} style={{width:'495px'}}
                />
                 <br></br>
                <input type="password" className="form-control" placeholder="Password" required
                       onChange={e => setPassword(e.target.value)} style={{width:'495px'}}
                />
                 <br></br>
                 {/* <button  type="submit" style={{marginLeft:'180px',backgroundColor:'#162a9e',color:'white'}}>Submit</button> */}
                 <Button type="submit"  style={{marginLeft:'180px',backgroundColor:'#162a9e',color:'white'}}>Submit</Button>
            </form>
            </div>
            </Row>
            <Row>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
            <form onSubmit={submit}>
                <br></br>
                <input className="form-control" placeholder="Name" required
                       onChange={e => setName(e.target.value)} style={{width:'495px'}}
                />
                <br></br>
                <input type="email" className="form-control" placeholder="Email" required
                       onChange={e => setEmail(e.target.value)} style={{width:'495px'}}
                />
                 <br></br>
                <input type="password" className="form-control" placeholder="Password" required
                       onChange={e => setPassword(e.target.value)} style={{width:'495px'}}
                />
                 <br></br>
                 {/* <button  type="submit" style={{marginLeft:'180px',backgroundColor:'#162a9e',color:'white'}}>Submit</button> */}
                 <Button type="submit"  style={{marginLeft:'180px',backgroundColor:'#162a9e',color:'white'}}>Submit</Button>
            </form>
            </div>
            </Row>
            </div>
          
          </div>
          </Col>
          </Row>
            </CardBody>
              </Card>
            </Jumbotron>
        </div>
    );
};

export default Register;
