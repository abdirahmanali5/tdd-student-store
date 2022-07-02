import "./ShoppingCart.css";
export default function ShoppingCart({ shoppingCart, isOpen, products }) {
  console.log("ShoppingCart:", shoppingCart);
   let allTot = 0;
    let taxes = allTot * 0.085
  return (
    // <div className="checkout-form">
    //     <div>
    //     <h3 className={props.isOpen ? "checkout-title" : "closed"}>Email</h3>
    //     <input type="email" className={props.isOpen ? "checkout-form-input" : "closed"} placeholder="student@codepath.org">
    //     </input>
    //     </div>
    //     <div>
    //     <h3 className={props.isOpen ? "checkout-title" : "closed"}>Name</h3>
    //     <input className={props.isOpen ? "checkout-form-input" : "closed"} placeholder="Student Name">
    //     </input>
    //     {/* <button className={props.isOpen ? "checkout-button" : "closed"}>Checkout</button> */}
    //     <button className={props.isOpen ? "checkout-button" : "closed"} onClick={props.handleOnSubmitCheckoutForm}>Checkout</button>
    //     </div>
    // </div>
    <table className={isOpen ? "checkout-title" : "closed"}>
      <tr>
           <th>Product</th>
           <th>Quantity</th>
           <th>Price</th>
           <th></th>
      </tr>
      <tr>
        <td>
          
          {shoppingCart.map((element, index) => {
             console.log("id:",element)
            const quant = element.quantity
            const id  = element.itemId
            console.log("id2:",id)
            const price = products.price
           return  <tr key= {index} > <td> {id} </td> </tr>
                   
          })}
        </td>
        <td>
        {shoppingCart.map((element, index) => {
            const quant = element.quantity
            const id  = element.itemId
            const price = products.price
           return  <tr> <td> {quant} </td> </tr>
                   
          })}
        </td>
        <td> {shoppingCart.map((element, index) => {
         const  price =  products[element.itemId - 1].price   
         const total = price * element.quantity
         allTot += total
         taxes = allTot * 0.085;
         return  <tr> <td> {total} </td> </tr>        
          })}</td>
        <td> </td>  
         
      </tr>
      <tr>
        <td>{"Total: " + allTot}</td>
        <td>{"Taxes: " + taxes}</td>
        <td></td>
      </tr>
    </table>
  );
  // need buttons to add to cart and then in shopping cart I need to times 0.085 times whatever is in the shopping cart array
}

//write code to find tax which is price times 0.085
