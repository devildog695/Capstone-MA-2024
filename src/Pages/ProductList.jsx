import { useContext, useState, useEffect } from "react";

import PropTypes from "prop-types";
import { CartContext } from "../components/contexts/CartContextProvider";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { cart, setCart } = useContext(CartContext);

  ProductList.propTypes = {
    addToCart: PropTypes.func.isRequired,
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  console.log(cart);
  return (
    <div>
      <h1>Product List</h1>
      <label>
        Filter by Category:
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {[...new Set(products.map((product) => product.category))].map(
            (category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </label>
      <div className="product-box">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            cart={cart}
            setCart={setCart}
            component={"products"}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
