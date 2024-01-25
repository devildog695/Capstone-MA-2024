import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../components/contexts/CartContextProvider";

const Homepage = () => {
  const [featuredProduct, setFeaturedProduct] = useState(null);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/1")
      .then((response) => {
        setFeaturedProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching featured product:", error);
      });
  }, []);

  console.log(cart?.[0]);

  return (
    <div>
      <header>
        <h1>Welcome to Our MegaMALL!</h1>
      </header>

      <main>
        <section className="featured-products">
          <h2>Featured Products</h2>
          {featuredProduct && (
            <div>
              <h3>{featuredProduct.title}</h3>
              <p>Price: ${featuredProduct.price}</p>
              <p>Description: {featuredProduct.description}</p>
              <img
                className="product-image"
                src={featuredProduct.image}
                alt={featuredProduct.title}
              />
              <Link to={`/product/${featuredProduct.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          )}
        </section>

        <section className="about-us">
          <h2>About Us</h2>
          <p>
            Discover a wide range of products and shop with confidence at our
            online store.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
