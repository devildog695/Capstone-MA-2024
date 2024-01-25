import { useState, useContext } from "react";
import { CartContext } from "../components/contexts/CartContextProvider";

const Checkout = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [billingAddress, setBillingAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentError, setPaymentError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Get cart and getTotalPrice from the CartContext
  const { cart, getTotalPrice } = useContext(CartContext);

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handleBillingAddressChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setTimeout(() => {
        setPaymentSuccess(true);
      }, 2000);
    } catch (error) {
      console.error("Error processing payment:", error);
      setPaymentError("Payment processing failed. Please try again.");
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {paymentSuccess ? (
        <p className="success">
          Payment successful! Thank you for your purchase.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Payment Information</h3>
          <div>
            <label>
              Card Number:
              <input
                type="text"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handlePaymentInfoChange}
              />
            </label>
          </div>
          <div>
            <label>
              Expiration Date:
              <input
                type="text"
                name="expirationDate"
                value={paymentInfo.expirationDate}
                onChange={handlePaymentInfoChange}
              />
            </label>
          </div>
          <div>
            <label>
              CVV:
              <input
                type="text"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handlePaymentInfoChange}
              />
            </label>
          </div>

          <h3>Billing Address</h3>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={billingAddress.name}
                onChange={handleBillingAddressChange}
              />
            </label>
          </div>
          <div>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={billingAddress.address}
                onChange={handleBillingAddressChange}
              />
            </label>
          </div>
          <div>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={billingAddress.city}
                onChange={handleBillingAddressChange}
              />
            </label>
          </div>
          <div>
            <label>
              State:
              <input
                type="text"
                name="state"
                value={billingAddress.state}
                onChange={handleBillingAddressChange}
              />
            </label>
          </div>
          <div>
            <label>
              ZIP:
              <input
                type="text"
                name="zip"
                value={billingAddress.zip}
                onChange={handleBillingAddressChange}
              />
            </label>
          </div>

          <h3>Cart</h3>
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <p>{product.title}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          ))}

          <p>Total: ${getTotalPrice().toFixed(2)}</p>

          <button type="submit">Submit Payment</button>
        </form>
      )}
      {paymentError && <p className="error">{paymentError}</p>}
    </div>
  );
};

export default Checkout;
