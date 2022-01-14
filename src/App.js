import React from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import products from "./product-data";
import CheckoutPage from "./components/CheckoutPage"
import {BrowserRouter,Route,Routes} from "react-router-dom";


function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="checkout-page" element={<div>
      <Navbar/><br></br><br></br><br></br>
     
      <CheckoutPage/>
    </div>} />
    <Route path="/" element={<div>
      <Navbar/><br></br><br></br><br></br>
      <Products/>
      
    </div>} />
</Routes>


    
</BrowserRouter>
    
  );
}

export default App;
