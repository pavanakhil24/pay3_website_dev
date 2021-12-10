import React from 'react'
import Iframe from 'react-iframe'


export default function Withdraw() {

    const onEvent = async (e) => {
        if (e.eventType === Gem.events.SUCCESS)
          return console.log('Success!', e.data);
        // Send offramp transfer info to server in order
        // to fetch the transaction wallet address
        if (e.eventType === Gem.events.PROMPT && e.data.action === 'transfer') {
          await createTransfer(e.data);
          return;
        }
        console.log('onEvent', e);
      };
    const onrampConfig = {
      partnerName: "Nu10",
      partnerIconUrl: "https://nu10.ai/wp-content/uploads/2021/08/Nu10-Logo-New.png",
      apiKey: "1f21f4e677b5e50fc11f812f5e05f3480fc3102e6e74148010ec70dd544cd213",
	  intent : "sell",
      wallets: [
        {
          asset: 'btc',
          address: ""
        },
        {
          asset: 'eth',
          address: ""
        }
      ],
      onEvent,
    };
    // Instantiate Gem Widget
    const GO = new Gem.Onramp(onrampConfig);
    // Launch Gem on click
    const GemButton = document.getElementById('gem-button');
    GemButton.onclick = function() {
      GO.open({userEmail: "abhishekp@nu10.co",userId:"c8ac4e79-efcd-4f1b-b292-1ae68fd0e703"});
    };
  
    return(
        <button id="gem-button" href='https://packages.sandbox.gem.co/gem-init.js'>Add Money With CIMA Wallet</button>
    );
    
}
