import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to YADLAPALLI Real Estates</h1>
      <p>Find your dream home today!</p>

      <div className="home-buttons">
        <Link to="/search">
          <button>Search Properties</button>
        </Link>
        <Link to="/wishlist">
          <button>View Wishlist</button>
        </Link>
        <Link to="/dashboard">
          <button>Go to Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
