import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

function Header() {
  const navigate = useNavigate(); // For navigation
  const { cartItems } = useCart(); // Access cartItems from context

  const cartCount = cartItems.length;

  const handleSearch = (e) => {
    const query = e.target.value.trim().toLowerCase(); // Convert query to lowercase for case-insensitive matching
    navigate(`/allproducts?query=${query}`); // Redirect with query string
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    fontSize: "1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparent background
    backdropFilter: "blur(10px)", // Blur effect
    position: "fixed",
    width: "100%",
    zIndex: 1000,
    boxSizing: "border-box",
  };

  const logoContainerStyle = {
    flexShrink: 0, // Prevents shrinking when resizing
    cursor: "pointer", // Cursor indicates clickable
  };

  const logoStyle = {
    height: "75px", // Adjustable height for resizing
  };

  const searchContainerStyle = {
    flex: 1,
    margin: "0 2rem",
    maxWidth: "400px",
    position: "relative",
  };

  const searchIconStyle = {
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#999",
    fontSize: "1rem",
    pointerEvents: "none",
  };

  const searchInputStyle = {
    width: "125%",
    padding: "8px 12px 8px 40px", // Padding to the left for the icon
    fontSize: "0.9rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const navStyle = {
    display: "flex",
    gap: "1.5rem",
  };

  const navButtonStyle = {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
    color: "#333",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  };

  const iconContainerStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  };

  const cartIconStyle = {
    fontSize: "24px",
    cursor: "pointer",
    color: "#333",
    transition: "color 0.3s ease",
    position: "relative",
  };

  const cartCountStyle = {
    position: "absolute",
    top: "-5px",
    right: "-10px",
    backgroundColor: "dimgrey",
    color: "white",
    fontSize: "0.8rem",
    fontWeight: "bold",
    borderRadius: "50%",
    padding: "2px 6px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const iconStyle = {
    fontSize: "24px",
    cursor: "pointer",
    color: "#333",
    transition: "color 0.3s ease",
  };

  const hoverEffectStyle = (e) => {
    e.target.style.color = "#007bff";
  };

  const removeHoverEffectStyle = (e) => {
    e.target.style.color = "#333";
  };

  return (
    <header style={headerStyle}>
      {/* Navigate to Home on logo click */}
      <div style={logoContainerStyle} onClick={() => navigate("/")}>
        <img
          src="/images/medstore logo.jpg"
          alt="MedStore Logo"
          style={logoStyle}
        />
      </div>
      <div style={searchContainerStyle}>
        <span style={searchIconStyle}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input
          type="text"
          placeholder="Search for products..."
          style={searchInputStyle}
          onFocus={(e) => (e.target.style.borderColor = "#007bff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          onChange={handleSearch} // Trigger navigation on input change
        />
      </div>
      <nav style={navStyle}>
        {/* Navigate to All Products */}
        <button
          style={navButtonStyle}
          onClick={() => navigate("/allproducts")}
          onMouseEnter={(e) => (e.target.style.color = "#007bff")}
          onMouseLeave={(e) => (e.target.style.color = "#333")}
        >
          All Products
        </button>
        {/* Navigate to Contact */}
        <button
          style={navButtonStyle}
          onClick={() => navigate("/contact")}
          onMouseEnter={(e) => (e.target.style.color = "#007bff")}
          onMouseLeave={(e) => (e.target.style.color = "#333")}
        >
          Contact Us
        </button>
      </nav>
      <div style={iconContainerStyle}>
        {/* Navigate to Cart */}
        <div style={{ position: "relative" }}>
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={cartIconStyle}
            onClick={() => navigate("/cart")}
            onMouseEnter={hoverEffectStyle}
            onMouseLeave={removeHoverEffectStyle}
          />
          {cartCount > 0 && <span style={cartCountStyle}>{cartCount}</span>}
        </div>
        {/* Navigate to User */}
        <FontAwesomeIcon
          icon={faUser}
          style={iconStyle}
          onClick={() => navigate("/user")}
          onMouseEnter={hoverEffectStyle}
          onMouseLeave={removeHoverEffectStyle}
        />
      </div>
    </header>
  );
}

export default Header;
