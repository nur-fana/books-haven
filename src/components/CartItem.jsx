// CartItem: displays one book inside the shopping cart.
// Props: item, onIncrease, onDecrease, onRemove
function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p className="book-author">{item.author}</p>
        <p className="book-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={() => onDecrease(item.id)} aria-label="Decrease">−</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(item.id)} aria-label="Increase">+</button>
      </div>
      <p className="cart-item-subtotal">${(item.price * item.quantity).toFixed(2)}</p>
      <button className="remove-btn" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
