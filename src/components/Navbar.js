import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png"; // Import logo

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      {/* Centered Logo */}
      <div className="nav-center">
        <img src={logo} alt="Logo" className="nav-logo" />
      </div>
      
      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/wishlist">Wishlist</Link>
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={() => setUser(null)}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
