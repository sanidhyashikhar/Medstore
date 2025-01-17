import { useLocation, useNavigate } from "react-router-dom";
import allProductsdata from "./Products";
import { useCart } from "./CartContext"; // Import CartContext

function AllProducts() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart, increaseQuantity, reduceQuantity, cartItems } = useCart();

  // Extract query from URL
  const query = new URLSearchParams(location.search).get("query") || "";

  // Filter products based on the search query
  const filteredProducts = allProductsdata.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    marginTop: "2rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)", // 5 cards in a row
    gap: "1rem",
    margin: "0 auto",
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    height: "500px",
    width: "300px",
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  const nameStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const priceStyle = {
    fontSize: "0.9rem",
    color: "#007bff",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 16px",
    fontSize: "0.9rem",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  const quantityButtonStyle = {
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    padding: "5px 10px",
    fontSize: "0.9rem",
    cursor: "pointer",
    borderRadius: "4px",
    margin: "0 5px",
  };

  const getProductQuantity = (id) => {
    const product = cartItems.find((item) => item.id === id);
    return product ? product.quantity : 0;
  };

  return (
    <div style={containerStyle}>
      <h2>All Products</h2>
      <div style={gridStyle}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const quantity = getProductQuantity(product.id);
            return (
              <div
                key={product.id}
                style={cardStyle}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={imageStyle}
                />
                <p style={nameStyle}>{product.name}</p>
                <p style={priceStyle}>${product.price}</p>
                {quantity > 0 ? (
                  <div onClick={(e) => e.stopPropagation()}>
                    <button
                      style={quantityButtonStyle}
                      onClick={() => {
                        if (quantity > 1) {
                          reduceQuantity(product.id);
                        } else {
                          reduceQuantity(product.id);
                        }
                      }}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      style={quantityButtonStyle}
                      onClick={() => increaseQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    style={buttonStyle}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <p>No products match your search.</p>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
