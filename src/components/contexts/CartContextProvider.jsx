import { useEffect, createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const localCart = localStorage.getItem("cart");

  useEffect(() => {
    if (localCart) {
      setCart(JSON.parse(localCart));
    } else setCart([]);
  }, [localCart]);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addToCart = (product, quantity) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
      updatedCart.push({ ...product, quantity });
    }

    updateCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    updateCart(updatedCart);
  };

  const getTotalPrice = () => {
    let total = 0;
    for (const item of cart) {
      total += item.price * item.quantity;
    }
    return total;
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContextProvider;
