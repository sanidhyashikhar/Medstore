import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";
import { useEffect, useState } from "react";

function FinalOrderConfirmation() {
  const { cartItems, clearCart } = useCart();
  const [finalCartDetails, setFinalCartDetails] = useState([]);

  useEffect(() => {
    if (cartItems.length > 0) {
      setFinalCartDetails(cartItems); // Save cart items to a separate state
      clearCart(); // Clear cart after saving the details
    }
  }, [cartItems, clearCart]);

  const totalCost = finalCartDetails.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Styles for the container and elements
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "85vh",
    backgroundColor: "#f3f4f6",
    fontFamily: "'Arial', sans-serif",
    padding: "2rem",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    maxWidth: "600px",
    textAlign: "center",
    color: "#333",
    marginTop: "3rem",
  };

  const iconStyle = {
    fontSize: "4rem",
    color: "#28a745",
    marginBottom: "1rem",
  };

  const headingStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#28a745",
  };

  const textStyle = {
    fontSize: "1rem",
    marginBottom: "1.5rem",
    color: "#555",
    lineHeight: "1.6",
  };

  const productListStyle = {
    width: "95%",
    marginBottom: "1rem",
    borderRadius: "8px",
    border: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
    padding: "1rem",
  };

  const productItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
  };

  const productImageStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "8px",
    marginRight: "1rem",
  };

  const productDetailsStyle = {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    flex: 1,
  };

  const productTextStyle = {
    fontSize: "0.9rem",
    color: "#333",
  };

  const productQuantityStyle = {
    fontSize: "0.9rem",
    color: "#555",
  };

  const totalStyle = {
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginTop: "1rem",
    textAlign: "right",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "6px",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
        <h1 style={headingStyle}>Order Confirmed!</h1>
        <p style={textStyle}>
          Thank you for shopping with <strong>MedStore</strong>. Your order has
          been successfully placed. Here are the details of your order:
        </p>

        <div style={productListStyle}>
          {finalCartDetails.map((item) => (
            <div key={item.id} style={productItemStyle}>
              <div style={productDetailsStyle}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={productImageStyle}
                />
                <div>
                  <p style={productTextStyle}>{item.name}</p>
                  <p style={productQuantityStyle}>
                    Quantity: {item.quantity} | Price: ${item.price}
                  </p>
                </div>
              </div>
              <span style={productTextStyle}>
                Total: ${item.price * item.quantity}
              </span>
            </div>
          ))}
        </div>

        <p style={totalStyle}>Total Cost: ${totalCost}</p>

        <button
          style={buttonStyle}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default FinalOrderConfirmation;
