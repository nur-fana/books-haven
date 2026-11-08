import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import books from "../data/books.js";

// Dynamic page: /book/:id
function BookDetails({ addToCart }) {
  const { id } = useParams(); // id comes from the URL as a string
  const book = books.find((b) => b.id === Number(id));
  const [added, setAdded] = useState(false);

  // If no book has this id, show a friendly message
  if (!book) {
    return (
      <div className="container section empty-state">
        <h2>Book not found</h2>
        <Link to="/shop" className="btn">Back to Shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(book);
    setAdded(true);
  };

  return (
    <section className="section container">
      <Link to="/shop" className="text-link">← Back to Shop</Link>
      <div className="details-grid">
        <div className="details-image">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="details-info">
          <span className="book-category">{book.category}</span>
          <h1>{book.title}</h1>
          <p className="book-author">by {book.author}</p>
          <p className="details-price">${book.price.toFixed(2)}</p>
          <p className="details-description">{book.description}</p>
          <div className="hero-buttons">
            <button className="btn" onClick={handleAdd}>Add to Cart</button>
            <Link to="/cart" className="btn btn-outline">Go to Cart</Link>
          </div>
          {added && <p className="added-message">✓ Added to your cart.</p>}
        </div>
      </div>
    </section>
  );
}

export default BookDetails;
