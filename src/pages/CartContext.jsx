import { createContext, useContext, useState } from "react";

// Create Cart Context
const CartContext = createContext();

// Custom hook to use Cart Context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart Provider Component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Function to reduce quantity of a product in the cart
  const reduceQuantity = (productId) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.id === productId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 }; // Decrease quantity if greater than 1
            } else {
              return null; // Mark item for removal
            }
          }
          return item; // Keep other items unchanged
        })
        .filter((item) => item !== null); // Remove items marked as null
    });
  };

  // Function to increase quantity of a product in the cart
  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to add a new product to the cart, ensuring no duplicates
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If product already exists, increase its quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        reduceQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
