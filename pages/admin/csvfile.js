import { useState } from 'react'
import { Collapse, Row,Table, Button, Modal,
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Col} from 'reactstrap';
import Deposit1 from "components/Headers/deposit1.js";
import Deposit from 'components/Headers/success.js'

export default function CsvReader(){

    

    const [csvFile, setCsvFile] = useState();
    const [csvArray, setCsvArray] = useState([]);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [modal1, setModal1] = useState(false);

    const toggle1 = () => setModal1(!modal1);
    // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]

    const processCSV = (str, delim=',') => {
        const headers = str.slice(0,str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map( row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })

        setCsvArray(newArray)
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();
        

        reader.onload = function(e) {
            const text = e.target.result;
            console.log(text);
            processCSV(text)
        }

        reader.readAsText(file);
    }

    return(
       
        <form id='csv-form' style={{marginRight:'40px'}}>
    
            <input
                type='file'
                accept='.csv'
                id='csvFile'
                onChange={(e) => {
                    setCsvFile(e.target.files[0])
                }}
            >
            </input>
            
            
            
            <Button
                style={{backgroundColor:'#24539E',marginRight:'0px',color:'white',borderRadius:'10px'}}
                
                onClick={(e) => {
                
                    e.preventDefault()
                    if(csvFile){
                        
                        submit()
                    }
                   
                }}
            >
                UPLOAD
            </Button>
            
            
            <br/>
            <br/>
            <div>
            {csvArray.length>0 ? 
            <>
            
            
            
                <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Token</th>
                        <th>Token Amount</th>
                        <th>Fiat</th>
                        <th>Fiat-Amount</th>
                    </thead>
                    <tbody>
                        {
                            csvArray.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.address}</td>
                                    <td>{item.date}</td>
                                    <td>{item.token}</td>
                                    <td>{item.tokenamount}</td>
                                    <td>{item.fiat}</td>
                                    <td>{item.fiatamount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <br></br>
                <Button  style={{marginLeft:'1080px',borderRadius:'10px',fontSize:'14px',backgroundColor:'#24539E',color:'white'}} onClick={toggle}>PROCEED</Button>
      <Modal isOpen={modal} toggle={toggle}  >
      
        <ModalBody>
        
        <div >
    <span style={{fontSize:'24px',fontWeight:'bold'}}>Payment Request Summary</span>
    <br></br>
    <br></br>
    
   
    
                <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Token</th>
                        <th>Token Amount</th>
                        <th>Fiat</th>
                        <th>Fiat-Amount</th>
                    </thead>
                    <tbody>
                        {
                            csvArray.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.address}</td>
                                    <td>{item.date}</td>
                                    <td>{item.token}</td>
                                    <td>{item.tokenamount}</td>
                                    <td>{item.fiat}</td>
                                    <td>{item.fiatamount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
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
    <form>
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
    <form>
    <label for="amount"> Total Fiat Amount:&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USD 4 </label>
    <br></br>
    <label for="amount"> Total Token Amount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC 0.000078</label>
    <br></br>
    <label for="amount"> Total Transaction Fee: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USD 0.31</label>
    <br></br>
    <label for="amount"> Total Amount to be paid:&nbsp;&nbsp;USD 4.31</label>
    </form>
    <br></br>
    <div style={{alignContent:'flex-end'}}>
    <Row>
    <Col>
    <Button style={{backgroundColor:'#162a9e',color:'white',marginLeft:'0px'}} href="/admin/dashboard">CANCEL</Button>
    
    </Col>
    <Col>
    <Button style={{backgroundColor:'#162a9e',color:'white',marginLeft:'110px'}} type="submit" onClick={toggle1}>PAY</Button>
   <Modal isOpen={modal1} toggle={toggle1}>
      <ModalBody>
       <Deposit/>
      </ModalBody>
    </Modal>
    </Col>
    </Row>
    </div>
    </form>
      {/* <div className="slider input-slider--" id="sliderRegular"></div> */}
      {/* <br></br>
      <div className="slider input-slider--" id="sliderDouble"></div> */}
    </div>
        </ModalBody>
      </Modal>
                
                
            </> : null}
            </div>
        </form>
        
    );

}