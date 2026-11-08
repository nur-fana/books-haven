import { Link } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";
import books, { categories } from "../data/books.js";

// Home page: hero, featured books, categories, bestsellers, promotion
function Home({ addToCart }) {
  // Use filter() to pick featured and bestselling books
  const featuredBooks = books.filter((book) => book.featured).slice(0, 4);
  const bestsellers = books.filter((book) => book.bestseller).slice(0, 4);

  return (
    <div>
      {/* Hero section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="eyebrow">Welcome to Book Haven</span>
            <h1>Find your next favourite story.</h1>
            <p>
              A carefully curated bookstore for curious minds. Discover classics,
              modern bestsellers and hidden gems, delivered to your door.
            </p>
            <div className="hero-buttons">
              <Link to="/shop" className="btn">Shop Now</Link>
              <Link to="/about" className="btn btn-outline">Our Story</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero.jpg" alt="Warm bookstore interior" />
          </div>
        </div>
      </section>

      {/* Featured books */}
      <section className="section container">
        <div className="section-header">
          <h2>Featured Books</h2>
          <Link to="/shop" className="text-link">View all →</Link>
        </div>
        <div className="book-grid">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Popular categories */}
      <section className="section section-beige">
        <div className="container">
          <div className="section-header">
            <h2>Popular Categories</h2>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/shop?category=${encodeURIComponent(category)}`}
                className="category-card"
              >
                <span>{category}</span>
                <small>
                  {books.filter((book) => book.category === category).length} books
                </small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="section container">
        <div className="section-header">
          <h2>Bestsellers</h2>
          <Link to="/shop" className="text-link">View all →</Link>
        </div>
        <div className="book-grid">
          {bestsellers.map((book) => (
            <BookCard key={book.id} book={book} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Promotional section */}
      <section className="container">
        <div className="promo">
          <div>
            <span className="eyebrow">Limited offer</span>
            <h2>Free delivery on orders over $40</h2>
            <p>Treat yourself to a new stack of books this season.</p>
          </div>
          <Link to="/shop" className="btn btn-light">Start Browsing</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
