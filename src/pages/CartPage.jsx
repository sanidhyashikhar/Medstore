import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, reduceQuantity } =
    useCart();

  const totalAmount = cartItems.reduce((total, item) => {
    // Convert item.price to a string if it's not already
    const priceStr =
      typeof item.price === "string" ? item.price : `${item.price}`;
    // Remove $ if it's present and parse the number
    const price = parseFloat(priceStr.replace("$", "")) || 0;
    const quantity = item.quantity || 0;
    return total + price * quantity;
  }, 0);

  console.log("Total Amount:", totalAmount);

  console.log("Total Amount:", totalAmount);

  console.log("Total Amount:", totalAmount);

  const navigate = useNavigate();
  // Function to finalize order
  const handleFinalizeOrder = () => {
    //  clearCart(); // Clear cart items
    navigate("/confirm_order"); // Navigate to confirmation page
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        marginTop: "2rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          Your cart is empty.
        </p>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr 1fr 1fr 1fr",
              gap: "1rem",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            <span>Image</span>
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Actions</span>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 3fr 1fr 1fr 1fr",
                gap: "1rem",
                alignItems: "center",
                marginBottom: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "60px", height: "60px", borderRadius: "4px" }}
              />
              <span>{item.name}</span>
              <span>{item.price}</span>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <button
                  style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                  onClick={() => reduceQuantity(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <button
                style={{
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div
            style={{
              textAlign: "right",
              marginTop: "1rem",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            Total: ${totalAmount}
          </div>

          <div style={{ textAlign: "right", marginTop: "1rem" }}>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 20px",
                fontSize: "1rem",
                cursor: "pointer",
                borderRadius: "8px",
              }}
              onClick={handleFinalizeOrder}
            >
              Finalize Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
