import { useState, useEffect } from "react";

const carouselItems = [
  {
    id: 1,
    text: "Discover Reliable Medical Solutions",
    description:
      "MedStore is committed to providing the best quality medical supplies to ensure your well-being. Explore our wide range of products tailored to meet your healthcare needs.",
    image: "/images/doc2.png",
  },
  {
    id: 2,
    text: "Your Health, Our Priority",
    description:
      "We provide top-notch medical products to support your health journey. Shop now for trusted solutions.",
    image: "/images/pic7.jpg",
  },
  {
    id: 3,
    text: "Affordable Healthcare Products",
    description:
      "Experience quality and affordability with MedStore. Your one-stop solution for all medical needs.",
    image: "/images/medical-team.png",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselContainerStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    marginBottom: "2rem",
    width: "100%",
    height: "600px",
    marginTop: "5rem",
  };

  const slideStyle = (index) => ({
    position: "absolute",
    top: "0",
    left: `${index === currentSlide ? "0%" : "100%"}`,
    width: "100%",
    height: "100%",
    transition: "left 1.5s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  });

  const imageStyle = {
    width: "50%",
    height: "100%",
    objectFit: "fill",
    borderRadius: "12px",
  };

  const textContainerStyle = (isLeft) => ({
    width: "50%",
    padding: "30px",
    color: "black",
    textAlign: isLeft ? "left" : "right",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: isLeft ? "flex-start" : "flex-end",
  });

  const navButtonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
  };

  const navButtonStyle = {
    backgroundColor: "#343a40",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    fontSize: "1.5rem",
    margin: "0 10px",
    cursor: "pointer",
    borderRadius: "50%",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, background-color 0.3s ease",
  };

  const navButtonHoverStyle = {
    backgroundColor: "#007bff",
    transform: "scale(1.2)",
  };

  // Auto-change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  return (
    <div>
      <div style={carouselContainerStyle}>
        {carouselItems.map((item, index) => (
          <div key={item.id} style={slideStyle(index)}>
            {index % 2 != 0 ? (
              <>
                <div style={textContainerStyle(false)}>
                  <h2>{item.text}</h2>
                  <p>{item.description}</p>
                </div>
                <img src={item.image} alt={item.text} style={imageStyle} />
              </>
            ) : (
              <>
                <img src={item.image} alt={item.text} style={imageStyle} />
                <div style={textContainerStyle(true)}>
                  <h2>{item.text}</h2>
                  <p>{item.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div style={navButtonContainerStyle}>
        <button
          style={navButtonStyle}
          onClick={handlePrevious}
          onMouseEnter={(e) =>
            Object.assign(e.target.style, navButtonHoverStyle)
          }
          onMouseLeave={(e) => Object.assign(e.target.style, navButtonStyle)}
        >
          &lt;
        </button>
        <button
          style={navButtonStyle}
          onClick={handleNext}
          onMouseEnter={(e) =>
            Object.assign(e.target.style, navButtonHoverStyle)
          }
          onMouseLeave={(e) => Object.assign(e.target.style, navButtonStyle)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
