import Checkout from './Checkout';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


const initialOptions = {
  "client-id": `${import.meta.env.VITE_CLIENT_ID}`,
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