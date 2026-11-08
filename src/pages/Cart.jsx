import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";

// Cart page: receives the cart and its functions as props from App.jsx
function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate the total price
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });

  // Demo checkout: no real payment, just a message and an empty cart
  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="container section empty-state">
        <h2>Thank you for your order!</h2>
        <p>This is a demo checkout — no payment was processed.</p>
        <Link to="/shop" className="btn">Continue Shopping</Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container section empty-state">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any books yet.</p>
        <Link to="/shop" className="btn">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <section className="section container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-layout">
        <div className="cart-list">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeFromCart}
            />
          ))}
        </div>
        <aside className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
          <div className="summary-row"><span>Delivery</span><span>{total >= 40 ? "Free" : "$4.00"}</span></div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>${(total >= 40 ? total : total + 4).toFixed(2)}</span>
          </div>
          <button className="btn btn-full" onClick={handleCheckout}>Checkout (Demo)</button>
          <Link to="/shop" className="btn btn-outline btn-full">Continue Shopping</Link>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
