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
} from "reactstrap";

function AdminNavbar({ brandText }) {
  return (
    <>
      <Navbar style={{backgroundColor:' white'}}>
        <Container fluid>
        <Link href="/admin/dashboard" >
        <img style={{height:'100px'}}
                      alt="..."
                      src={require("assets/img/theme/pay3.png")}
                    />
        </Link>
        <div style={{textAlign:'center'}}>
        <img style={{height:'70px',marginLeft:'0px'}}
                      alt="..."
                      src={require("assets/img/theme/sermologo.jpg")}
                    />
                    <br></br>
        <span style={{color:'#24539e'}}>Crypto Incentive Management System</span>
        <br></br>
        <span style={{color:'#24539e'}}>Powered by Pay3</span>
                    </div>
           {/* <Link href="/admin/dashboard">
            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
              Dashboard
            </a>
          </Link> */}
          {/* <Link href="/admin/profile">
            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
              My Profile
            </a>
          </Link> */}
         {/* <Link href="/admin/dashboard">
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
          </Link> */}
          {/* <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0  font-weight-bold" style={{color:'black',marginLeft:'400px'}}>
                    <img style={{width:'20px',height:'20px'}}
                      alt="..."
                      src={require("assets/img/theme/bitcoin.png")}
                    />
                      BTC{" "} */}
                      {/* <i className="fa fa-angle-down" /> */}
                    {/* </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <Link href="/admin/profile">
                  <DropdownItem>
                    
                    <span style={{fontSize:'16px',fontWeight:'bold'}}>USDC</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/profile">
                  <DropdownItem>
                  
                    <span style={{fontSize:'16px',fontWeight:'bold'}}>ETH</span>
                  </DropdownItem>
                </Link>
                
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>  */}
         
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
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("assets/img/theme/dude.jpg")}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-black font-weight-bold">
                      John Wick
                    </span>
                    <br></br>
                    <span className="mb-0 font-weight-bold" style={{color:'#24539e'}}>
                      Admin
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <Link href="/admin/profile">
                  <DropdownItem>
                    <i className="ni ni-single-02" />
                    <span>Profile</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/dashboard">
                  <DropdownItem>
                    <i className="ni ni-single-02" />
                    <span>Dashboard</span>
                  </DropdownItem>
                </Link>
                <Link href="/admin/funds">
                  <DropdownItem>
                    <i className="ni ni-single-02" />
                    <span>Fund Management</span>
                  </DropdownItem>
                </Link>
                {/* <Link href="/admin/profile">
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
                </Link> */}
                <Link href="/admin/login">
                  <DropdownItem>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </Link>
                {/* <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}



export default AdminNavbar;
