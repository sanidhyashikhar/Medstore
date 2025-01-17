import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import { useCart } from "./CartContext";

function Home() {
  const navigate = useNavigate();
  const { addToCart, increaseQuantity, reduceQuantity, cartItems } = useCart(); // Access addToCart from context
  const [hoveredCard, setHoveredCard] = useState(null); // State to track which card is hovered

  // Big section carousel items

  // Auto-change slide every 3 seconds
  const featureProducts = [
    {
      id: 1,
      image: "/images/pic1.jpg",
      name: "Paracetamol Tablets",
      price: 10,
      description:
        "Effective pain relief and fever reducer for common ailments.",
    },
    {
      id: 2,
      image: "/images/pic2.jpg",
      name: "Digital Thermometer",
      price: 15,
      description: "Accurate and easy-to-use digital thermometer for all ages.",
    },
    {
      id: 3,
      image: "/images/pic3.jpg",
      name: "Vitamin D Supplement",
      price: 20,
      description:
        "Boost your immune system with high-quality Vitamin D capsules.",
    },
    {
      id: 4,
      image: "/images/pic4.jpg",
      name: "Blood Pressure Monitor",
      price: 25,
      description:
        "Reliable and user-friendly monitor for tracking blood pressure.",
    },
  ];

  const containerStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const headerStyle = {
    fontSize: "2rem",
    marginBottom: "3rem",
    marginTop: "5rem",
  };

  const descriptionStyle = {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "2rem",
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    border: "2px solid transparent", // Initial border
    padding: "8px 16px",
    fontSize: "1rem",
    margin: "0 5px",
    cursor: "pointer",
    borderRadius: "5px",
    transition:
      "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
  };

  // Hover effect (apply inline or through a pseudo-class in CSS)
  const buttonHoverStyle = {
    backgroundColor: "white",
    color: "black",
    border: "black", // Hover border color
  };

  const cardContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    width: "99.5%",
  };

  const cardRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    margin: "0 auto",
  };

  const cardStyle = (isHovered) => ({
    width: "45%",
    height: "400px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: isHovered
      ? "0 6px 12px rgba(0, 0, 0, 0.2)"
      : "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    position: "relative",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  });

  const imageStyle = {
    width: "100%",
    height: "80%",
    objectFit: "fill",
  };

  const infoSectionStyle = {
    height: "20%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
    borderTop: "1px solid #ddd",
  };

  const productInfoStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#333",
  };

  const productPriceStyle = {
    fontSize: "1rem",
    color: "#007bff",
  };

  const getProductQuantity = (id) => {
    const product = cartItems.find((item) => item.id === id);
    return product ? product.quantity : 0;
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Welcome to MedStore</h1>
      <p style={descriptionStyle}>
        Your one-stop shop for medical supplies and healthcare products.
      </p>
      {/* Carousel Section */}
      <Carousel />

      <h2 style={headerStyle}>Featured Products</h2>

      <div style={cardContainerStyle}>
        {/* Dynamically Render Products */}
        {featureProducts.map((product, index) => {
          const quantity = getProductQuantity(product.id);

          return (
            <div style={cardRowStyle} key={product.id}>
              {index % 2 !== 0 ? (
                <>
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                  <div
                    style={cardStyle(hoveredCard === product.id)}
                    onMouseEnter={() => setHoveredCard(product.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => navigate(`/product/${product.id}`)} // Navigate with product ID
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={imageStyle}
                    />
                    <div style={infoSectionStyle}>
                      <div>
                        <p style={productInfoStyle}>{product.name}</p>
                        <p style={productPriceStyle}>{product.price}</p>
                      </div>
                      {quantity > 0 ? (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <button
                            //style={quantityButtonStyle}
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent card click from triggering
                              reduceQuantity(product.id);
                            }}
                          >
                            -
                          </button>
                          <span style={{ margin: "0 10px" }}>{quantity}</span>
                          <button
                            //style={quantityButtonStyle}
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent card click from triggering
                              increaseQuantity(product.id);
                            }}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          style={buttonStyle}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor =
                              buttonHoverStyle.backgroundColor;
                            e.target.style.color = buttonHoverStyle.color;
                            e.target.style.borderColor =
                              buttonHoverStyle.border;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor =
                              buttonStyle.backgroundColor;
                            e.target.style.color = buttonStyle.color;
                            e.target.style.borderColor = buttonStyle.border;
                          }}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click from triggering
                            addToCart(product);
                          }}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={cardStyle(hoveredCard === product.id)}
                    onMouseEnter={() => setHoveredCard(product.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => navigate(`/product/${product.id}`)} // Navigate with product ID
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={imageStyle}
                    />
                    <div style={infoSectionStyle}>
                      <div>
                        <p style={productInfoStyle}>{product.name}</p>
                        <p style={productPriceStyle}>{product.price}</p>
                      </div>
                      {quantity > 0 ? (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <button
                            //style={quantityButtonStyle}
                            onClick={() => reduceQuantity(product.id)}
                          >
                            -
                          </button>
                          <span style={{ margin: "0 10px" }}>{quantity}</span>
                          <button
                            //style={quantityButtonStyle}
                            onClick={() => increaseQuantity(product.id)}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          style={buttonStyle}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor =
                              buttonHoverStyle.backgroundColor;
                            e.target.style.color = buttonHoverStyle.color;
                            e.target.style.borderColor =
                              buttonHoverStyle.border;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor =
                              buttonStyle.backgroundColor;
                            e.target.style.color = buttonStyle.color;
                            e.target.style.borderColor = buttonStyle.border;
                          }}
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* See More Products Button */}
      <button
        style={{ ...buttonStyle, marginTop: "2rem" }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
          e.target.style.color = buttonHoverStyle.color;
          e.target.style.borderColor = buttonHoverStyle.border;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = buttonStyle.backgroundColor;
          e.target.style.color = buttonStyle.color;
          e.target.style.borderColor = buttonStyle.border;
        }}
        onClick={() => navigate("/allproducts")}
      >
        See More Products
      </button>
    </div>
  );
}

export default Home;
