import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  // Cart state: an array of { id, title, author, price, image, quantity }
  // The initial value is loaded from localStorage (if it exists)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("bookHavenCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save the cart to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("bookHavenCart", JSON.stringify(cart));
  }, [cart]);

  // Add a book to the cart (or increase its quantity if it is already there)
  const addToCart = (book) => {
    const existingItem = cart.find((item) => item.id === book.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  // Increase the quantity of one book
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease the quantity (remove the book if quantity reaches 0)
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  // Remove a book completely from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Empty the cart (used by the demo checkout)
  const clearCart = () => {
    setCart([]);
  };

  // Total number of items, shown in the Navbar badge
  let cartCount = 0;
  cart.forEach((item) => {
    cartCount += item.quantity;
  });

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:id" element={<BookDetails addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
