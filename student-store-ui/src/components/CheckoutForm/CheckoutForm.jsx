import "./CheckoutForm.css"
import {useState} from 'react';
 

export default function CheckoutForm(props){
    console.log("in checkout")
    const [message, setMessage] = useState('');
//saves Name infomation 
    const handleChange = event => {
        console.log("in event")
      setMessage(event.target.value);
  
      console.log('value is:', event.target.value);
    } 

    return (
        
        <div className="checkout-form">
            <div>
            <h3 className={props.isOpen ? "checkout-title" : "closed"}>Email</h3>
            <input type="email" name="message" className={props.isOpen ? "checkout-form-input" : "closed"} placeholder="student@codepath.org">
            </input>
            </div>
            <div>
            <h3 className={props.isOpen ? "checkout-title" : "closed"}>Name</h3>
            <input type="text"id="message"   name="message" onChange={handleChange} value={message}className={props.isOpen ? "checkout-form-input" : "closed"} placeholder="Student Name">
            </input>
            {/* <button className={props.isOpen ? "checkout-button" : "closed"}>Checkout</button> */}
            <button className={props.isOpen ? "checkout-button" : "closed"} onClick={props.handleOnSubmitCheckoutForm}>Checkout</button>
            </div>
        </div>

    )

} 
