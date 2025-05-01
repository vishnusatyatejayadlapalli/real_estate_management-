import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#333",
    color: "white"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "background-color 0.3s"
  };

  const buttonStyle = {
    ...linkStyle,
    border: "none",
    background: "none",
    cursor: "pointer",
    fontSize: "1rem",
    fontFamily: "inherit"
  };

  const activeStyle = {
    ...linkStyle,
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/search" style={linkStyle}>Search</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {currentUser ? (
          <>
            <Link to="/wishlist" style={linkStyle}>Wishlist</Link>
            <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
            {currentUser.email && (
              <span style={{ marginRight: "1rem" }}>
                {currentUser.email}
              </span>
            )}
            <button
              onClick={handleLogout}
              style={buttonStyle}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/signup" style={linkStyle}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
