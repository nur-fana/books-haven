import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";
import books, { categories } from "../data/books.js";

// Shop page: search, filter by category and sort by price
function Shop({ addToCart }) {
  // Read ?category=... from the URL (used by the Home page category links)
  const [searchParams] = useSearchParams();
  const startCategory = searchParams.get("category") || "All";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(startCategory);
  const [sortOrder, setSortOrder] = useState("default");

  // 1) Filter by search term (title or author)
  let displayedBooks = books.filter((book) => {
    const term = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  });

  // 2) Filter by category
  if (selectedCategory !== "All") {
    displayedBooks = displayedBooks.filter(
      (book) => book.category === selectedCategory
    );
  }

  // 3) Sort by price ([...array] makes a copy so the original is not changed)
  if (sortOrder === "low-high") {
    displayedBooks = [...displayedBooks].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-low") {
    displayedBooks = [...displayedBooks].sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Shop</span>
          <h1>Browse our collection</h1>
          <p>Search by title or author, filter by category and sort by price.</p>
        </div>
      </section>

      <section className="section container">
        <div className="shop-controls">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="default">Sort: Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        <p className="results-count">{displayedBooks.length} book(s) found</p>

        {displayedBooks.length > 0 ? (
          <div className="book-grid">
            {displayedBooks.map((book) => (
              <BookCard key={book.id} book={book} addToCart={addToCart} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No books match your search.</h3>
            <p>Try another title, author or category.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Shop;
