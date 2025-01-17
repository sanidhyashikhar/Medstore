import allProductsdata from "./Products";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";

function ProductPage() {
  const { id } = useParams();
  const { addToCart, increaseQuantity, reduceQuantity, cartItems } = useCart();

  // Find the product with the matching ID in allProductsdata
  const product = allProductsdata.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "2rem", color: "#333" }}>
        <h1>Product Not Found</h1>
        <p>The product you are looking for is not available.</p>
      </div>
    );
  }

  const getProductQuantity = () => {
    const cartProduct = cartItems.find((item) => item.id === product.id);
    return cartProduct ? cartProduct.quantity : 0;
  };

  const quantity = getProductQuantity();

  // Styles
  const containerStyle = {
    fontFamily: "'Arial', sans-serif",
    color: "#333",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const imageContainerStyle = {
    width: "100%",
    height: "700px", // Set a fixed height for the container
    overflow: "hidden",
    borderRadius: "12px",
    marginBottom: "2rem",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    marginTop: "5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensures the image covers the container
  };

  const detailsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
    color: "#555",
  };

  const priceStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "1rem",
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
    margin: "0 10px",
  };

  const quantityContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
  };

  return (
    <div style={containerStyle}>
      {/* Big Image */}
      <div style={imageContainerStyle}>
        <img src={product.image} alt={product.name} style={imageStyle} />
      </div>

      {/* Details Section */}
      <div style={detailsContainerStyle}>
        <h1 style={titleStyle}>{product.name}</h1>
        <p style={descriptionStyle}>{product.description}</p>
        <p style={priceStyle}>${product.price}</p>

        {quantity > 0 ? (
          <div style={quantityContainerStyle}>
            <button
              style={buttonStyle}
              onClick={() => reduceQuantity(product.id)}
            >
              -
            </button>
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {quantity}
            </span>
            <button
              style={buttonStyle}
              onClick={() => increaseQuantity(product.id)}
            >
              +
            </button>
          </div>
        ) : (
          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
