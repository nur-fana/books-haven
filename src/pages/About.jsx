import { Link } from "react-router-dom";

// Data for the "Why choose us" cards, displayed with map()
const reasons = [
  { title: "Curated Selection", text: "Every book on our shelves is chosen by real readers." },
  { title: "Fair Prices", text: "Great stories should be affordable for everyone." },
  { title: "Fast Delivery", text: "Your next read arrives quickly and carefully packed." },
  { title: "Friendly Support", text: "Need a recommendation? Our team is happy to help." },
];

function About() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">About us</span>
          <h1>A home for book lovers</h1>
          <p>Book Haven is an online bookstore built around one simple idea: reading should feel warm, personal and inspiring.</p>
        </div>
      </section>

      <section className="section container about-grid">
        <img src="/images/about.jpg" alt="Stack of books with coffee" className="about-image" />
        <div>
          <h2>Our Story</h2>
          <p>
            Book Haven started as a small dream shared by a group of friends who spent
            their weekends in second-hand bookshops. We wanted to bring that cosy,
            unhurried feeling online, so anyone could discover a great book from home.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to connect readers with stories that move them, by offering a
            thoughtful selection, honest prices and a calm, beautiful shopping experience.
          </p>
          <Link to="/shop" className="btn">Explore the Shop</Link>
        </div>
      </section>

      <section className="section section-beige">
        <div className="container">
          <div className="section-header"><h2>Why Choose Us?</h2></div>
          <div className="reason-grid">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="reason-card">
                <span className="reason-number">0{index + 1}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
