import React from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import products from "./product-data";
import CheckoutPage from "./components/CheckoutPage"


function App() {
  return (
    <div>
      <Navbar/><br></br><br></br><br></br>
      {/* <Products/> */}
      <CheckoutPage/>
    </div>
    
  );
}

export default App;
