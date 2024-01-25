import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../components/contexts/CartContextProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, getTotalPrice } = useContext(CartContext);

  const formattedTotalPrice = getTotalPrice() < 0 ? 0 : getTotalPrice();

  return (
    <div>
      {cart.length === 0 ? (
        <p>Add some items!</p>
      ) : (
        <>
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <ProductCard
                product={product}
                cart={cart}
                setCart={setCart}
                component="cart"
              />
              <p>Quantity: {product.quantity}</p>
            </div>
          ))}
          <p>Total: ${formattedTotalPrice.toFixed(2)}</p>
          <Link to="/checkout">
            <button>Go to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
