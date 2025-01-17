import { useNavigate } from "react-router-dom";

function UserPage() {
  const navigate = useNavigate();

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, Springfield, USA",
    profilePicture: "https://via.placeholder.com/150",
    orders: [
      {
        id: 1,
        image: "/images/pic1.jpg",
        name: "Paracetamol Tablets",
        price: 10,
        description:
          "Effective pain relief and fever reducer for common ailments.",
        status: "Processing",
        date: "2024-12-05",
      },
      {
        id: 2,
        image: "/images/pic2.jpg",
        name: "Digital Thermometer",
        price: 15,
        description:
          "Accurate and easy-to-use digital thermometer for all ages.",
        status: "Shipped",
        date: "2024-12-03",
      },
      {
        id: 3,
        image: "/images/pic3.jpg",
        name: "Vitamin D Supplement",
        price: 20,
        description:
          "Boost your immune system with high-quality Vitamin D capsules.",
        status: "Delivered",
        date: "2024-12-01",
      },
    ],
  };

  const outerContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    padding: "2rem",
  };

  const containerStyle = {
    marginTop: "2rem",
    padding: "2rem",
    maxWidth: "600px",
    width: "100%",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    color: "#333",
  };

  const profileSectionStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    gap: "1.5rem",
  };

  const profileImageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "2px solid #007bff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const profileDetailsStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
  };

  const ordersSectionStyle = {
    marginTop: "2rem",
  };

  const orderCardStyle = {
    padding: "1rem",
    marginBottom: "1rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const orderDetailsStyle = {
    flex: "1 1 70%",
    marginRight: "1rem",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    fontSize: "0.9rem",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={outerContainerStyle}>
      <div style={containerStyle}>
        <div style={profileSectionStyle}>
          <img
            src={user.profilePicture}
            alt="Profile"
            style={profileImageStyle}
          />
          <div style={profileDetailsStyle}>
            <h2>{user.name}</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
          </div>
        </div>

        <div style={ordersSectionStyle}>
          <h3>Your Orders</h3>
          {user.orders.map((order) => (
            <div key={order.id} style={orderCardStyle}>
              <div style={orderDetailsStyle}>
                <p>
                  <strong>Product:</strong> {order.name}
                </p>
                <p>
                  <strong>Date:</strong> {order.date}
                </p>
                <p>
                  <strong>Status:</strong> {order.status}
                </p>
              </div>
              <button
                style={buttonStyle}
                onClick={() => navigate(`/product/${order.id}`)}
              >
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserPage;
