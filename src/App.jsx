import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import AllProducts from "./pages/AllProducts";
import UserPage from "./pages/UserPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import FinalOrderConfirmation from "./pages/FinalOrderConfirmation";
import ProductPage from "./pages/Product";

function App() {
  // Styles as internal objects
  const appContainerStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const mainStyle = {
    flex: 1,
    width: "100%",
    minHeight: "100vh",
    backgroundImage: "url('/images/background.jpg')", // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    marginTop: "70px", // Adjust for fixed header height
  };

  return (
    <Router>
      <div style={appContainerStyle}>
        <Header /> {/* Header gets cart count from context */}
        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<Home />} /> {/* No need to pass props */}
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/confirm_order" element={<FinalOrderConfirmation />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
