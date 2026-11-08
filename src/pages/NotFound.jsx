import { Link } from "react-router-dom";

// Shown when the URL does not match any route
function NotFound() {
  return (
    <div className="container section empty-state">
      <h1>404</h1>
      <p>Sorry, this page does not exist.</p>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}

export default NotFound;
