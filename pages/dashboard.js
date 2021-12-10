import React from 'react'
import Admin from "layouts/Admin1.js";
import Header from "components/Headers/Header1.js";

const Dashboard1 = (props) => {
        const [activeNav, setActiveNav] = React.useState(1);
        const [chartExample1Data, setChartExample1Data] = React.useState("data1");
      
       
        return (
          <>
          <div>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             
              <div style={{textAlign:'center',fontSize:'24px',color:'black',fontWeight:'bold'}}>CIMA wallet offers wide range of currencies to exchange

              </div>
          </div>
            {/* <Header /> */}
        </>
    )
}

Dashboard1.layout = Admin;

export default Dashboard1;
