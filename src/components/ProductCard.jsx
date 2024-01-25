import { useState } from "react";
import PropTypes from "prop-types";

export default function ProductCard({ product, cart, setCart, component }) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const addToCart = () => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = () => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = () => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const decreaseQuantity = () => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      if (updatedCart[existingProductIndex].quantity > 1) {
        updatedCart[existingProductIndex].quantity -= 1;
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    }
  };

  return (
    <div className="product-box">
      <h2>{product?.title}</h2>
      <p>Price: ${product?.price}</p>
      {showDescription && (
        <div className="product-description">{product.description}</div>
      )}
      <button onClick={toggleDescription}>
        {showDescription ? "Show Less" : "Show More"}
      </button>
      <img
        className="product-image"
        src={product?.image}
        alt={product?.title}
      />
      {component === "products" && (
        <button onClick={addToCart}>Add to Cart</button>
      )}
      {component === "cart" && (
        <>
          <button onClick={increaseQuantity}>+</button>
          <button onClick={decreaseQuantity}>-</button>
          <button onClick={removeFromCart}>Remove</button>
        </>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  component: PropTypes.string.isRequired,
};

// import React, { useState } from "react";
// import PropTypes from "prop-types";

// export default function ProductCard({ product, cart, setCart, component }) {
//   const [showDescription, setShowDescription] = useState(false);

//   const toggleDescription = () => {
//     setShowDescription(!showDescription);
//   };
//   const addToCart = () => {
//     const updatedCart = [...cart];
//     const existingProductIndex = updatedCart.findIndex(
//       (item) => item.id === product.id
//     );

//     if (existingProductIndex !== -1) {
//       updatedCart[existingProductIndex].quantity += 1;
//     } else {
//       updatedCart.push({ ...product, quantity: 1 });
//     }

//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const removeFromCart = () => {
//     const updatedCart = cart.filter((item) => item.id !== product.id);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const increaseQuantity = () => {
//     const updatedCart = [...cart];
//     const existingProductIndex = updatedCart.findIndex(
//       (item) => item.id === product.id
//     );

//     if (existingProductIndex !== -1) {
//       updatedCart[existingProductIndex].quantity += 1;
//       setCart(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }
//   };

//   const decreaseQuantity = () => {
//     const updatedCart = [...cart];
//     const existingProductIndex = updatedCart.findIndex(
//       (item) => item.id === product.id
//     );

//     if (existingProductIndex !== -1) {
//       if (updatedCart[existingProductIndex].quantity > 1) {
//         updatedCart[existingProductIndex].quantity -= 1;
//         setCart(updatedCart);
//         localStorage.setItem("cart", JSON.stringify(updatedCart));
//       }
//     }
//   };

//   return (
//     <div className="product-box">
//       <h2>{product?.title}</h2>
//       <p>Price: ${product?.price}</p>
//       <div
//         className={`product-description ${showDescription ? "expanded" : ""}`}
//       >
//         {product.description}
//       </div>
//       <button onClick={toggleDescription}>
//         {showDescription ? "Show Less" : "Show More"}
//       </button>
//       <img
//         className="product-image"
//         src={product?.image}
//         alt={product?.title}
//       />
//       {component === "products" && (
//         <button onClick={addToCart}>Add to Cart</button>
//       )}
//       {component === "cart" && (
//         <>
//           <button onClick={increaseQuantity}>+</button>
//           <button onClick={decreaseQuantity}>-</button>
//           <button onClick={removeFromCart}>Remove</button>
//         </>
//       )}
//     </div>
//   );
// }

// ProductCard.propTypes = {
//   product: PropTypes.object.isRequired,
//   cart: PropTypes.array.isRequired,
//   setCart: PropTypes.func.isRequired,
//   component: PropTypes.string.isRequired,
// };
