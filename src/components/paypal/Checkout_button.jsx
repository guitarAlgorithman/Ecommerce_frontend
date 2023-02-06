import Checkout from './Checkout';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


const initialOptions = {
  "client-id": "ASMkmAqY6Ot2B53OfYWqizRtnPGzEeNeGmgUR_ks90I97kjzPoUxWd1GlYKLIuxcVtsy8grYyjIgUrUA",
  currency: "USD",
  intent: "capture",
};

function Checkout_button(props) {
  

    
    return (
      <PayPalScriptProvider options={initialOptions} value={props}>
          <Checkout value={props}/>
      </PayPalScriptProvider>
    )
}


export default Checkout_button;