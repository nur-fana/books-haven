import { Link } from "react-router-dom";

// BookCard: reusable card that displays one book.
// Props: book (object) and addToCart (function from App.jsx)
function BookCard({ book, addToCart }) {
  return (
    <article className="book-card">
      <Link to={`/book/${book.id}`} className="book-card-image">
        <img src={book.image} alt={book.title} loading="lazy" />
      </Link>
      <div className="book-card-body">
        <span className="book-category">{book.category}</span>
        <Link to={`/book/${book.id}`}>
          <h3 className="book-title">{book.title}</h3>
        </Link>
        <p className="book-author">{book.author}</p>
        <div className="book-card-footer">
          <span className="book-price">${book.price.toFixed(2)}</span>
          <button className="btn btn-small" onClick={() => addToCart(book)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default BookCard;
