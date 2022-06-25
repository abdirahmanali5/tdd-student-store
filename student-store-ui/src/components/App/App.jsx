import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./App.css";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import {useState} from "react";


function handleAddItemToCart(productId){
  let foundItem =ShoppingCart.find((element) => {productId == element.id});
  if(foundItem == null){
    let item = {id: productid, quantity: 1}
    ShoppingCart.concat(item)
  }
  else{
    foundItem.quantity++

  }
}

function handleRemoveItemToCart(productId){
  let foundItem =ShoppingCart.find((element) => {productId == element.id});
  if(foundItem != null){  
    foundItem.quantity--
    if (foundItem.quantity == 0){
        ShoppingCart = ShoppingCart.filter(element => {return !(element.id == productId)})
    }
  }
  else{} 
  }

export default function App() {
  const [Products,setProducts] = useState([]);
  const [IsFetching,set_IsFetching] = useState();
  const [Error,setError] = useState();
  const [IsOpen,setIsOpen] = useState();
  const [ShoppingCart,setShoppingCart] = useState([]);
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {
            <Routes>
              <Route
                path="/"
                element={<Home/>}
              />
              <Route
                path="/products/:productId"
                element={<ProductDetail handleItem ={handleAddItemToCart}/>}
              />
              <Route
                path="/products/:productId"
                element={<Navbar />}
              />
               <Route
                path="/products/:productId"
                element={<Sidebar />}
              />

              <Route
                path="*"
                
              />
            </Routes>
          }
          <Navbar />
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  );
}
