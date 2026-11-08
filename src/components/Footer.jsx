import { Link } from "react-router-dom";

// Footer shown at the bottom of every page
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3 className="logo">Book <span>Haven</span></h3>
          <p>A quiet corner of the internet for people who love stories.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>hello@bookhaven.com</p>
          <p>+961 1 234 567</p>
          <p>Hamra Street, Beirut</p>
        </div>
      </div>
      <p className="footer-bottom">© {year} Book Haven. University project – CSCI426.</p>
    </footer>
  );
}

export default Footer;
