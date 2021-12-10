import transakSDK from '@transak/transak-sdk'
import { useRouter } from 'next/router'
let transak = new transakSDK({
  apiKey: '4fcd6904-706b-4aff-bd9d-77422813bbb7',  // Your API Key
  environment: 'STAGING', // STAGING/PRODUCTION
  defaultCryptoCurrency: 'ETH',
  walletAddress: '0xf4b5a569f48b8dd22ec0334aef3e7903d425774a', // Your customer's wallet address
  themeColor: '000000', // App theme color
  fiatCurrency: 'USD', // INR/GBP
  email: 'kosuripavanakhil007@gmail.com', // Your customer's email address
  redirectURL: 'http://localhost:3002/admin/dashboard',
  hostURL: 'http://localhost:3002/admin/dashboard',
  widgetHeight: '550px',
  widgetWidth: '450px',
  defaultFiatAmount:'10',
//   userData:{
//     "first_name": "Satoshi",
//     "last_name": "Nakamoto",
//     "email": "email@gmail.com",
//     "mobileNumber": "+19692154942",
//     "dob": "1994-11-26",
//     "address": {
//         "addressLine1": "170 Pine St",
//         "addressLine2": "San Francisco",
//         "city": "San Francisco",
//         "state": "CA",
//         "postCode": "94111",
//         "countryCode": "US"
//     }
// }
});

transak.init();

// To get all the events
transak.on(transak.ALL_EVENTS, (data) => {
  console.log(data)
});

// This will trigger when the user marks payment is made.
transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
  
  console.log(orderData);
  transak.close();
});
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />   */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
