import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <div>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
