import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import ProductDetails from "./Pages/ProductDetails";
import CartContextProvider from "./components/contexts/CartContextProvider";
import "./styles.css";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const localtoken = localStorage.getItem("token");
    if (localtoken) {
      setToken(localtoken);
    }
  }, []);
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header token={token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route path="*" element={<Homepage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Homepage from "./Pages/Homepage";
// import About from "./Pages/About";
// import ProductList from "./Pages/ProductList";
// import { Cart, useCart } from "./Pages/Cart";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Login from "./components/Login/Login";
// import ProductDetails from "./Pages/ProductDetails";
// // import { useCart } from "./Pages/Cart";

// import "./styles.css";

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <Cart>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/about" element={<About />} />
//           <Route
//             path="/productlist"
//             element={
//               <ProductList
//                 // addToCart={addToCart}
//                 // addToCart={(product) => setCart([...cart, product])}
//                 element={<ProductList addToCart={addToCart} />}
//               />
//             }
//           />
//           <Route path="/product/:productId" element={<ProductDetails />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="*" element={<Homepage />} />
//         </Routes>

//         <Footer />
//       </BrowserRouter>
//     </Cart>
//   );
// }

// export default App;
