import React from "react";
import Link from "next/link";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  Button
} from "reactstrap";

function AdminNavbar({ brandText }) {
  return (
    <>
      <Navbar style={{backgroundColor:'#162a9e'}}>
        <Container fluid>
        <span style={{fontSize:'34px',fontWeight:'bold',textAlign:'center',color:'white'}}>CIMA</span>
          {/* <Link href="/admin/dashboard">
            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
              Dashboard
            </a>
          </Link>
          <Link href="/admin/dashboard">
            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
              Transactions
            </a>
          </Link> */}
          {/* <Link href="/admin/wallet">
            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
              add money
            </a>
          </Link>
          <Link href="/admin/dashboard">
            <a className="h4 mb-0 text-white text-uppercase ">
              Withdraw money
            </a>
          </Link> */}
          {/* <Link href="https://pg264.csb.app/">
            <a className="h4 mb-0 text-white text-uppercase ">
              date picker
            </a>
          </Link>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-white font-weight-bold">
                      CURRENCY
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <Link href="/admin/profile">
                  <DropdownItem>
                    
                    <span style={{fontSize:'16px',fontWeight:'bold'}}>Fiat currency</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/profile">
                  <DropdownItem>
                  
                    <span style={{fontSize:'16px',fontWeight:'bold'}}>USDT</span>
                  </DropdownItem>
                </Link>
                
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav> */}
         
          {/* <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form> */}
          <Nav className="align-items-center d-none d-md-flex" navbar>
            
            {/* <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav> */}
                <Media className="align-items-center">
                  <div>
                    
                    <Button href="/admin/login" style={{backgroundColor:'white',color:'#162a9e',fontWeight:'bold'}}>Login</Button>
                    {/* <Button href="/admin/login" style={{backgroundColor:'white',color:'#162a9e',fontWeight:'bold'}}>MRC Login</Button> */}
                    <Button href="/admin/signin" style={{backgroundColor:'white',color:'#162a9e',fontWeight:'bold'}}>Signup</Button>
                  </div>
                  
                  {/* <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-white font-weight-bold">
                      Jessica Jones
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcomw!</h6>
                </DropdownItem>
                <Link href="/admin/profile">
                  <DropdownItem>
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/profile">
                  <DropdownItem>
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/profile">
                  <DropdownItem>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/profile">
                  <DropdownItem>
                    <i className="ni ni-support-16" />
                    <span>Support</span>
                  </DropdownItem>
                </Link>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            </Media>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}



export default AdminNavbar;
