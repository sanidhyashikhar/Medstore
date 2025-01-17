function ContactPage() {
  // Random company data
  const companyInfo = {
    name: "MedStore",
    tagline: "Your Trusted Partner in Healthcare Products",
    address: "123 Healthcare Lane, MedCity, 56789",
    phone: "+1-800-555-HEAL",
    email: "support@medstore.com",
    businessHours: "Mon-Fri: 9 AM - 6 PM",
    website: "www.medstore.com",
  };

  // Styling
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "75vh",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    maxWidth: "600px",
    width: "100%",
  };

  const headerStyle = {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "1rem",
  };

  const taglineStyle = {
    fontSize: "1.2rem",
    color: "#007bff",
    marginBottom: "2rem",
  };

  const infoItemStyle = {
    fontSize: "1rem",
    color: "#555",
    margin: "0.5rem 0",
  };

  const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#0056b3",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headerStyle}>{companyInfo.name}</h1>
        <p style={taglineStyle}>{companyInfo.tagline}</p>

        <p style={infoItemStyle}>
          <strong>Address:</strong> {companyInfo.address}
        </p>
        <p style={infoItemStyle}>
          <strong>Phone:</strong> {companyInfo.phone}
        </p>
        <p style={infoItemStyle}>
          <strong>Email:</strong> {companyInfo.email}
        </p>
        <p style={infoItemStyle}>
          <strong>Business Hours:</strong> {companyInfo.businessHours}
        </p>
        <p style={infoItemStyle}>
          <strong>Website:</strong>{" "}
          <a
            href={`https://${companyInfo.website}`}
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {companyInfo.website}
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
